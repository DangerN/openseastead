import json
import boto3

dynamodb = boto3.client('dynamodb')
ses = boto3.client('ses')
lambda_client = boto3.client('lambda')


def subscribe_email():
    # add email to dynamo
    # send confirmation email
    pass


def unsubscribe_email():

    # remove email from dynamo
    pass


def lambda_handler(event, context):
    # TODO implement

    path = event['path']
    method = event['httpMethod']

    return {
        'statusCode': 200,
        'body': json.dumps(event)
    }
