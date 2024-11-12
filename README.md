[# nodeJsTest_nov_24
Bonus - Maintain an internal queue to auto-schedule this task in background , with batch processing of 300 request in each batch with the rate of 5 request per second
](https://randomuser.me/
Use this api to fetch the 5000 result in one request and no more
than 5 requests per second
Add sleep of 30 seconds after 5 request
Bonus - Maintain an internal queue to auto-schedule this task in
background , with batch processing of 300 request in each batch with
the rate of 5 request per second
These number should be kept in DB config and can be tweaked as per
the requirement
- sleep time
- request per batch
- no of request per second
- batch sleep
- api details and parameters if any
Use Nodejs, Typescript, MongoDB, mongoose
Write an get user api on top of this data with pagination
Query params for api?limit, page, sort, search (all are optional and
api should support default value)
Search should take a json with dynamic object and user can search by
{name, email, age, gender, dob, country etc ...}
Expected response - IPagination
{
total: number,
limit:number,
page:number,
sortBy:string
Items []
}
Write unit test cases for service functions alone
interface IItems {
id: string;
gender: string;
name: string;
address: IAddress;
email: string;
age: string;
picture: string;
createdAt: Date;
}
interface IAddress {
city: string;
state: string;
country: string;
street: string;
}

interface IPagination {
total: number;
limit: number;
page: number;
sortBy: string;
items: IItems;
}

Note: Follow best coding practices and create an approach first to
create this task before jumping into writing code)
