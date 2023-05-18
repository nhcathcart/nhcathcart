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
resource "aws_security_group" "nhcathcart-instance-rules" {
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
    Name = "allow_traffic_nhcathcart"
  }
}

#Create EC2 instances

resource "aws_instance" "nhcathcart-instance" {
  ami           = "ami-0cff7528ff583bf9a" # us-east-1
  instance_type = "t2.micro"
  availability_zone = "us-east-1a"
  security_groups = [aws_security_group.nhcathcart-instance-rules.name]
  user_data = <<-EOF
            #!/bin/bash
            sudo yum update -y
            sudo amazon-linux-extras install docker -y
            sudo service docker start
            sudo usermod -a -G docker ec2-user
            docker run -d --name nhcathcart  -p 80:3000 -p 443:3000 nhcathcart/nhcathcart:lastest
            EOF

tags = {
  Name = "nhcathcart-instance"
}
}

output "nhcathcart-instace-ip" {
  description = "public ip of the nhcathcart instance"
  value       = aws_instance.nhcathcart-instance.public_ip
}