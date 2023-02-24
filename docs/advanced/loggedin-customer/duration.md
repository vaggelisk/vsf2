## Logged in customer duration

This is sth that has to do with the duration a customer stays logged in.

And more specific has to do with his/her to token which can you find (once of many occasions)
as a param of the `Request POST https://<your_pwa_domanin>/api/user/me`.

Token includes an encoded date which is its expiration date, means the date which
the user will stop to be logged in.

To find this date have to open this [ https://jwt.io/](https://jwt.io/) and paste the token of your request.
On mouse hover you will see the date in human look.

To configure this duration you have to go to the adminPanel

  `Stores->Configuration->Services->Magento Web API->JWT Authentication`

at the field `Customer JWT Expires In`, you put the value you desire.



