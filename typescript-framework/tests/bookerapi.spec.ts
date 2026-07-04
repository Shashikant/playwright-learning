import { test, APIRequestContext, expect, request } from '@playwright/test';

let apiContext: APIRequestContext;
let token: string;

test('Get_Token_TC001', async ({ }) => {
    apiContext = await request.newContext();
    const response = await apiContext.post('https://restful-booker.herokuapp.com/auth', {
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            username: "admin",
            password: "password123"
        }
    });
    token = (await response.json()).token;
    console.log(token);

});

test('Create_Booking_TC002', async ({ }) => {
    apiContext = await request.newContext();
    const response = await apiContext.post('https://restful-booker.herokuapp.com/booking', {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`
        },
        data: {
            firstname: "John",
            lastname: "Doe",
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: "2023-01-01",
                checkout: "2023-01-02"
            },
            additionalneeds: "Breakfast"
        }
    });
    console.log(await response.json()); 
    expect(response.status()).toBe(200);
});

test('Get_Booking_TC003', async ({ }) => {
    apiContext = await request.newContext();
    const response = await apiContext.get('https://restful-booker.herokuapp.com/booking/1'
        , {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`
        }
    });
    console.log(await response.json());
    expect(response.status()).toBe(200);
});