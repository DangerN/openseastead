terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-west-2"
}

resource "aws_s3_bucket" "website" {
  bucket = "openseastead.org"
  acl    = "public-read"

  tags = {
    Name = "website"
  }
}

resource "aws_s3_bucket" "website-redirect" {
  bucket = "www.openseastead.org"
  acl    = "public-read"

  tags = {
    Name = "website-redirect"
  }
}

resource "aws_s3_bucket" "website-logs" {
  bucket = "logs.openseastead.org"
  acl    = "public-read"

  tags = {
    Name = "website"
  }
}

resource "aws_s3_bucket_acl" "website-logs-bucket-acl" {
  bucket = aws_s3_bucket.website-logs.id
  acl    = "log-delivery-write"
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website.bucket

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_logging" "website-logging-acl" {
  bucket = aws_s3_bucket.website.bucket

  target_bucket = aws_s3_bucket.website-logs.id
  target_prefix = "logs/"
}

resource "aws_s3_bucket_website_configuration" "website-redirect" {
  bucket = aws_s3_bucket.website-redirect.bucket

  redirect_all_requests_to {
    host_name = aws_s3_bucket.website.bucket
  }
}


