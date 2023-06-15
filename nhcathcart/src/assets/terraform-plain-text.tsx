export const terraformPlain = [
    {
      title: "Terraform 2 service boilerplate",
      description : "This is a terraform boilerplate to launch an 2 EC2 instances into your default virtual private cloud on AWS when one service relies on another. Its setup for a redis instance, and a server that relies on that redis instance, change to suit your needs. Please note its looking for a setup.sh.tpl file. That is included at the top.",
      code : `
      #setup.sh.tpl
      #!/bin/bash
      sudo yum update -y
      sudo amazon-linux-extras install docker -y
      sudo service docker start
      sudo usermod -a -G docker ec2-user
      docker pull docker pull <user>/<repo>:<tag>
      docker run -e REDISHOST=\${REDISHOST} --name myserver -p 80:6667 <user>/<repo>:<tag>

      terraform {
        required_providers {
          aws = {
            source  = "hashicorp/aws"
            version = "~> 4.0"
          }
        }
      }
      
      # Configure the AWS Provider
      provider "aws" {
        region = "us-east-1"
      }
      
      #Set the VPC to the default VPC provided by AWS
      resource "aws_default_vpc" "default" {
        enable_dns_hostnames = true
        tags = {
          Name = "Default VPC"
        }
      }
      #Set the subnet to the default subnet provided by AWS
      resource "aws_default_subnet" "default_subnet" {
        availability_zone = "us-east-1a"
      
        tags = {
          Name = "Default subnet for us-east-1a"
        }
      }
      #Create Security Groups/Rules
      resource "aws_security_group" "<server-name>" {
        name        = "allow_inbound_outbound"
        description = "Allow inbound and outbound traffic"
        vpc_id      = aws_default_vpc.default.id
      
        ingress {
          description      = "http"
          from_port        = 80
          to_port          = 80
          protocol         = "tcp"
          cidr_blocks      = ["0.0.0.0/0"]
        }
      
        egress {
          from_port        = 0
          to_port          = 0
          protocol         = "-1"
          cidr_blocks      = ["0.0.0.0/0"]
          ipv6_cidr_blocks = ["::/0"]
        }
      
        tags = {
          Name = "allow_traffic"
        }
      }
      resource "aws_security_group" "redis-instance" {
        name        = "allow_inbound_outbound_redis"
        description = "Allow inbound and outbound traffic redis"
        vpc_id      = aws_default_vpc.default.id
      
        ingress {
          from_port        = 6379
          to_port          = 6379
          protocol         = "tcp"
          security_groups = [aws_security_group.<server-name>.id]
        }
      
        egress {
          from_port        = 0
          to_port          = 0
          protocol         = "-1"
          cidr_blocks      = ["0.0.0.0/0"]
          ipv6_cidr_blocks = ["::/0"]
        }
      
        tags = {
          Name = "allow_traffic_from_<server-name>"
        }
      }
      #Create EC2 instances
      
      resource "aws_instance" "<server-name>" {
        ami           = "ami-0cff7528ff583bf9a" # us-east-1
        instance_type = "t2.micro"
        availability_zone = "us-east-1a"
        security_groups = [aws_security_group.<server-name>.name]
        depends_on = [aws_instance.myredis]
        user_data = templatefile("setup.sh.tpl", {REDISHOST = aws_instance.myredis.private_ip})
      
      tags = {
        Name = "<server-name>"
      }
      }
      
      resource "aws_instance" "myredis" {
        ami           = "ami-0cff7528ff583bf9a" # us-east-1
        instance_type = "t2.micro"
        availability_zone = "us-east-1a"
        security_groups = [aws_security_group.redis-instance.name]
        user_data = <<-EOF
                  #!/bin/bash
                  sudo yum update -y
                  sudo amazon-linux-extras install docker -y
                  sudo service docker start
                  sudo usermod -a -G docker ec2-user
                  docker run --name myredis --network host -d redis
                  EOF
        tags = {
          Name = "redis-server"
        }
      }
      `
    },
    {
        title: "Terraform SPA boilerplate",
        description: "This is a terraform boilerplate to launch an EC2 instance into your default virtual private cloud on AWS and pull and run a docker image from dockerhub.",
        code: `
        terraform {
            required_providers {
              aws = {
                source  = "hashicorp/aws"
                version = "~> 4.0"
              }
            }
          }
          
          # Configure the AWS Provider
          provider "aws" {
            region = "us-east-1"
          }
          
          #Set the VPC to the default VPC provided by AWS
          resource "aws_default_vpc" "default" {
            enable_dns_hostnames = true
            tags = {
              Name = "Default VPC"
            }
          }
          #Set the subnet to the default subnet provided by AWS
          resource "aws_default_subnet" "default_subnet" {
            availability_zone = "us-east-1a"
          
            tags = {
              Name = "Default subnet for us-east-1a"
            }
          }
          #Create Security Groups/Rules
          resource "aws_security_group" "<project-name>-rules" {
            name        = "allow_inbound_outbound_nhcathcart"
            description = "Allow inbound and outbound traffic"
            vpc_id      = aws_default_vpc.default.id
          
            ingress {
              description      = "http"
              from_port        = 80
              to_port          = 443
              protocol         = "TCP"
              cidr_blocks      = ["0.0.0.0/0"]
            }
          
            egress {
              from_port        = 0
              to_port          = 0
              protocol         = "-1"
              cidr_blocks      = ["0.0.0.0/0"]
              ipv6_cidr_blocks = ["::/0"]
            }
          
            tags = {
              Name = "allow_traffic_<project-name>"
            }
          }
          
          #Create EC2 instances
          
          resource "aws_instance" "<project-name>-instance" {
            ami           = "ami-0cff7528ff583bf9a" # us-east-1
            instance_type = "t2.micro"
            availability_zone = "us-east-1a"
            security_groups = [aws_security_group.<project-name>-rules.name]
            user_data = <<-EOF
                      #!/bin/bash
                      sudo yum update -y
                      sudo amazon-linux-extras install docker -y
                      sudo service docker start
                      sudo usermod -a -G docker ec2-user
                      docker run -d --name <project-name>  -p 80:3000 -p 443:3000 <dockerhub-username>/<repo-name>:latest
                      EOF
          
          tags = {
            Name = "<project-name>-instance"
          }
          }
          
          output "<project-name>-instace-ip" {
            description = "public ip of the <project-name> instance"
            value       = aws_instance.<project-name>-instance.public_ip
          }
        `
    }
]