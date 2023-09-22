# METEC

Welcome to METEC, your trusted online hardware store! At METEC, we take pride in offering you a wide selection of high-quality hardware products for all your technological needs. From computer components to electronic devices and peripherals, we have everything you need to take your tech experience to the next level.

## Overview
METEC is an innovative online ecommerce platform specializing in offering a wide range of high-quality hardware products. As a leading destination for technology enthusiasts and businesses, METEC provides a convenient and user-friendly shopping experience for customers looking to enhance their technological solutions.

At METEC, customers can explore a catalog of hardware products, including computer components, electronic devices, peripherals, and accessories. We carefully curate our selection to include products from recognized brands known for their reliability and performance. Whether you are a professional in need of enterprise-grade hardware or an individual seeking to improve your personal computing experience, METEC has the right solutions for you.

Join METEC today and discover a world of top-notch hardware products, reliable service, and a seamless online shopping experience. Enhance your technological solutions with confidence at METEC, your trusted partner in the world of hardware ecommerce.

![metec](https://github.com/Edvintrabajo/metec-ecommerce/assets/90867675/1eceb756-e372-4dbd-9917-b3267b7bb0a9)

> The web adapts to your windows brightness settings

## ⚡️ Instalation & Run
To install this project you will need some previous installations.
Fist of all you will need to install [node JS](https://nodejs.org/en), and lastly [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

```shell
git clone https://github.com/Edvintrabajo/metec-ecommerce.git # Clone the repo
cd metec-ecommerce # Access the folder
code . # This will open a new window in your code editor 
npm i # Install the project dependencies
npm run dev # Start the project in the localhost: http://localhost:5173/
```


## 🤚 Usage for Non-Logged-In Users

1. Catalog browsing: Non-logged-in users can freely explore our extensive catalog of hardware products. They can navigate through different categories, filter products by features, and view specific details of each item. This allows them to get a clear idea of the available products before making a purchase.

2. Basic information viewing: Non-logged-in users can access basic information about each product, such as its name, description, and price. This helps them evaluate if the product fits their needs and budget before making a purchase decision.

3. Adding products to the cart: While non-logged-in users cannot make a direct purchase, they have the option to add products to the shopping cart. This enables them to create a list of products they wish to acquire and then complete the purchasing process once they register on the site.

4. Contact information and support: METEC provides visible contact information for non-logged-in users. If they have any questions or need assistance, they can reach out to our support team for help and guidance.

## 👋 Usage for Logged-In Users

Logged in users will be able to enjoy the same features as non-logged in users, in addition to:

1. Account Management: Logged-in users have access to their account dashboard, where they can manage their personal information, shipping addresses, payment methods, and review their order history. This allows for quick and convenient updates to their profile and facilitates a smooth checkout process.

2. Faster Checkout: By being logged in, users can save time during the checkout process. Their stored payment and shipping details can be easily accessed, reducing the need to enter this information repeatedly for each purchase.

## 👮 Usage for Admin Users
> Remember to set up your firebase privileges 
As an administrator you will have access to some privileges:

**1. Web Admin Dashboard:** Administrators have access to an exclusive admin dashboard that allows them to monitor and control all aspects of the METEC site. From the dashboard, they can manage the product inventory, add new products, update prices, and make changes to product information.

**2. Firebase Dashboard:**
1. Firebase Admin Console: Administrators have access to the Firebase Admin Console, a comprehensive dashboard that serves as the centralized hub for managing METEC's backend infrastructure. From the console, administrators can handle various tasks such as user authentication, database management, cloud functions, and hosting configuration.

2. User Management: Administrators can manage user accounts and access control through Firebase Authentication. They have the ability to create and delete user accounts, reset passwords, and control user roles and permissions. This ensures secure and controlled access to METEC's features and data.

3. eal-time Database Management: The Firebase Real-time Database allows administrators to manage and manipulate data in real-time. They can add, update, or delete product information, inventory details, and other relevant data. This ensures that the site's content and information remain up-to-date and synchronized across all connected devices.

4. Analytics and Insights: Administrators can leverage Firebase Analytics to gain valuable insights into user behavior, engagement, and performance metrics. They can access detailed reports, track conversion rates, and monitor the effectiveness of marketing campaigns. These insights enable data-driven decision-making to optimize the user experience and drive business growth.

5. Cloud Functions and Hosting: Administrators can utilize Firebase Cloud Functions to execute server-side logic and automate backend processes. They can set up triggers, run scheduled tasks, and integrate with other services to streamline operations and enhance efficiency. Firebase Hosting allows administrators to deploy and manage the METEC website with ease, ensuring a reliable and scalable online presence. 

## 🔗 Deploy Link 
The link will change after the development phase is completed.
- https://test-metec-3.web.app/

## 💸 Owners
In the owners file you will find an array with emails, these will be the emails with privileges in the web page, and they will be the ones with administrator view.

If you want to have an administrator view you must add your email to the array, feel free to touch the configuration

## 🔥 Firebase
Now let's talk about the firebase configuration, to start you must create an account in firebase, configure your project, with the installation of the tools and finally getting the object with the keys. 

Then you must create the configuration file key named config-key.js in the root, with your data.
Don´t worry for the key, this is included in the gitIgnore, so you only will have it locally.

it should look something like this, with your data:

![](https://hackmd.io/_uploads/rJbPHHCVn.png)

## 💻 Technologies used
**Front-end:**
* HTML
* Tailwind
* JavaScript
* React ( dom - icons - particles - router )
* Material-Tailwind
* Daisyui
* TsParticles

**Back-end**
* Firebase
* Node
* Vite

**Extra**
* Prettier
* Uuid

## 🤝 Contributions
To contribute, follow these steps:

Make a fork of the project.
Create a branch for your contribution git checkout -b contribution/NameContribution
Make your changes and commit the changes git commit -m 'I added a contribution'.
Push to the branch git push origin contribution/NameContribution.
Open a pull request.

## 🗒️ Note
This is our final project of the course, we are open to all kinds of suggestions and critics and we will be glad to receive them 

## 📜 License
[MIT](https://choosealicense.com/licenses/mit/)

## 🤖 Authors
- Miguel Ángel Medina Ramírez
- Edvin Freyer Ortega
