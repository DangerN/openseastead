import json
import boto3

dynamodb = boto3.client('dynamodb')
ses = boto3.client('ses')
lambda_client = boto3.client('lambda')


def subscribe_email(event):
    # create ses contact
    # subscribe ses contact to newsletter
    # send confirmation email

    return {
        'statusCode': 201,
        'body': json.dumps(event)
    }


def unsubscribe_email():

    # remove email from dynamo
    pass


def lambda_handler(event, context):
    # TODO implement

    path = event['path']
    method = event['httpMethod']

    try:
        if path == '/api/news/subscribe' and method == 'POST':
            return subscribe_email(event)
    except Exception as e:
        print(e)
        return {
            'statusCode': 500,
            'body': json.dumps(event)
        }

    return {
        'statusCode': 400,
        'body': json.dumps(event)
    }
