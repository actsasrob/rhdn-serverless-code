# rhdn-serverless-code
Serverless version of robhughes.net (RHDN) website 


## Scripts

+ deployment_setup.sh -- Install dependencies. Build dist folder containing production application 
+ env_setup.sh -- Set up nvm environment for development
+ ng-server.sh -- Start development webserver. Opens browser table to http:/localhost:4201

## Update Website Hosted in S3:
+ Run deployment_setup.sh
+ aws s3 sync --delete rhdn-serverless/dist/rhdn-serverless/ s3://www.robhughes.net/

## To Do:
1. Replace mock news with Dynamo DB backend.
1. Add admin users and authentication
1. Only allow users to navigate to detail view when logged in as admin
1. Stylesheet updates for detail view
