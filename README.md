# __mifflin__-bills

## Setting up AWS

After creating your account with [AWS](aws.amazon.com), create an IAM user

> Choose IAM from AWS Management Console. Choose Users from the side panel.

Click Add User

* Enter a User name. I suggest &lt;your-name&gt;-console. In my case that's jason-console, but you can call it whatever you want.
* Access Type should be AWS Management Console access
* Console password: Autogenerated password
* Click Next: Permissions

Set permissions
* Attach existing policies directly
* Click the checkbox next to AdminstratorAccess
* Click Next: Tags

Ignore this section unless you have multiple users and need to break down your monthly bill with keys attached to your user.

* Click Next: Review

* Click Create user

Within the Success banner, make note of how to login with this IAM user. It'll be a sign-in link https://############.signin.aws.amazon.com/console. Also make note of your autogenerated password.

> Sign out and navigate to the URL you made note of previously and login with your newly-created IAM credentials.

## Create the database

After creating your AWS root account, then creating and logging in with your IAM user with AdministratorAccess privileges, create the database that'll hold all the bills info.

> From the AWS Management Console Navigate to RDS. Choose Databases from the side panel.