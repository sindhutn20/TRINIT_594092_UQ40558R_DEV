# TRINIT_594092_UQ40558R_DEV
## The problem statement  : ```**Rooting for a good cause** ```

> It  is a platform where Philantrophists and NGO's wish to connect each other.The philantrophists who are also known as donors and so wish to donate a certain amount to social cause can connect with the available and trusted NGO's here.

`Platforms like this can actually improve transperancy and accountability in donation process.In our prototype model we have two user interfaces available one is PHILANTROPHIST's PORTAL other is NGO's PORTAL.`

When you login as a Philantropist , you will be redirected to a webpage containing a list of NGO's specifying their previous works,  Goal , Plans , overall impact on environment and society  and their funding needs .Additionally each NGO  is also categorised as "Orphanage type donation " or  " social cause donation " or " donation for educational institutions " 
Depending upon this category , any philanthropist can select to the respective domain of NGO he/she wants to donate.
![img1](https://user-images.githubusercontent.com/125118272/218262586-bfbe4933-31e0-4388-bfa7-af0cbed89fa5.jpg)


When a philantropists wishes to donate to a particular NGO say "ABC" he may send a message by clicking  on "SEND MSG"
available , upon clicking it , he would be directed to particular NGO's mail address 

In this way any philantrophist may create their profile by clicking on " ADD NEW " feature and connect to any NGO he wishes to donate
In the same way 
When you login as NGO that is you wish to connect with philantrophists to advertise about your NGO , you will be redirected to a webpage which consists of profiles of all philanthropists 

![img2](https://user-images.githubusercontent.com/125118272/218262750-cb669007-0eea-4100-aa9d-498feaabf73c.jpg)


This profile of philanthropists consists about their donation preferences that is to what kind of NGO they wish to donate 

Likewise , when NGOs want to connect with them , simply the "SEND MSG" button will direct them to their mail id to communicate 

This is how the whole system works
HOW DOES THIS PRACTICALLY WORK ?? 

Firstly the user from the frontend sends the request to the server , server then sends it to the data base where the information of philantrophists and NGOs are stored 

The node js which connects the database and server  gets the response from the database and stores as say " result " 

First a data base is created which consists of PARMETERS OF CREATE USERS in which we consider ID as a primary entity 
So here in data base profiles are created , updated or newly added 

Here in the backend , it connects this dbconnectivity through the RESULT parameter as a response that will be directed to the User Interface or the frontend 

And so when the user clicks a button 
All this process happens at the backend and the respective information of the profiles are available to them 

Now knowing all the details , they can contact and if interested they may carry ahead their donation process
