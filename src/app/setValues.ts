export const nutri = {
    nutri_code: "ABC123",
    id: "1234567890",
    name: "John",
    lastname_1: "Doe",
    lastname_2: "Smith",
    address: "123 Main Street",
    photo: "https://media.discordapp.net/attachments/964576637725315072/1109721226932391947/images.png?width=337&height=337",
    email: "john.doe@example.com",
    birth_date: "1990-01-01",
    billing_type: "credit",
    role_name: "user"
};

export const paymentTypes = [
    "Weekly", 
    "Monthly",
    "Yearly"
];

export const patients = [
    {
        id: "1",
        name: "John",
        lastname_1: "Doe",
        lastname_2: "Smith"
    },
    {
        id: "2",
        name: "Jane",
        lastname_1: "Smith",
        lastname_2: "Johnson"
    },
    {
        id: "3",
        name: "Michael",
        lastname_1: "Brown",
        lastname_2: "Davis"
    },
    {
        id: "4",
        name: "Sarah",
        lastname_1: "Johnson",
        lastname_2: "Wilson"
    },
    {
        id: "5",
        name: "David",
        lastname_1: "Lee",
        lastname_2: "Anderson"
    }
]

export const patientDaily = {
    breakfast: "Oatmeal with mixed berries and a side of Greek yogurt",
    snack_morning: "A handful of almonds and an apple",
    lunch: "Grilled chicken breast with quinoa and roasted vegetables",
    snack_afternoon: "Carrot sticks with hummus",
    dinner: "Salmon with steamed broccoli and brown rice"
}

export const plans = [
    {
        id: "1",
        name: "Weight Loss"
    },
    {
        id: "2",
        name: "Weight Gain"
    },
    {
        id: "3",
        name: "Muscle Gain"
    },
    {
        id: "4",
        name: "Weight Maintenance"
    }
]

export const mealTimes = [
    'Breakfast',
    'Early snack',
    'Lunch',
    'Late snack',
    'Dinner'
]

export const products = [
    {
        "product_name": "Apple",
        "barcode": "1234567890"
    },
    {
        "product_name": "Banana",
        "barcode": "9876543210"
    },
    {
        "product_name": "Orange",
        "barcode": "4567890123"
    },
    {
        "product_name": "Grapes",
        "barcode": "5678901234"
    },
    {
        "product_name": "Strawberries",
        "barcode": "2345678901"
    },
    {
        "product_name": "Mango",
        "barcode": "8901234567"
    },
    {
        "product_name": "Watermelon",
        "barcode": "3456789012"
    },
    {
        "product_name": "Pineapple",
        "barcode": "6789012345"
    },
    {
        "product_name": "Kiwi",
        "barcode": "9012345678"
    },
    {
        "product_name": "Peach",
        "barcode": "0123456789"
    }
]

export const vitamins = [
    {
        vitamin:"B3",
        select: false
    },
    {
        vitamin:"B1",
        select: false
    },
    {
        vitamin:"B5",
        select: false
    },
    {
        vitamin:"B6",
        select: false
    },
    {
        vitamin:"B2",
        select: false
    },
    {
        vitamin:"B9",
        select: false
    },
    {
        vitamin:"E",
        select: false
    }
]

export const client = {
    "email": "john.doe@example.com",
    "name": "John",
    "lastname1": "Doe",
    "lastname2": "Smith",
    "country": "United States",
    "height": "180 cm",
    "weight": "75 kg",
    "calorie": 2000,
    "birth_date": "1990-01-01",
    "age": 33,
    "bmi": 23.15
}

export const comments = [
    {
      "id": "64741412f24fad190a09ea69",
      "client": "joseantonioestudiante2001@gmail.com",
      "nutritionist": "10002",
      "message": "Coma mas proteina",
      "date": "2023-05-28"
    },
    {
      "id": "6474159d6bfaf55861a1ae49",
      "client": "joseantonioestudiante2001@gmail.com",
      "nutritionist": "10002",
      "message": "Coma menos arroz",
      "date": "2023-05-27"
    },
    {
      "id": "64744c3b1963c8220e0326e8",
      "client": "joseantonioestudiante2001@gmail.com",
      "nutritionist": "10002",
      "message": "Coma mas vegetales",
      "date": "2023-05-23"
    }
  ]

export const clientReports = [
    {
        "date": "2023-05-01",
        "weight": 80.5,
        "waist": 90.0,
        "neck": 35.0,
        "hip": 100.0,
        "muscle_percentage": "25%",
        "fat_percentage": "30%"
    },
    {
        "date": "2023-05-15",
        "weight": 78.2,
        "waist": 88.5,
        "neck": 34.5,
        "hip": 98.0,
        "muscle_percentage": "27%",
        "fat_percentage": "28%"
    },
    {
        "date": "2023-05-29",
        "weight": 76.8,
        "waist": 87.0,
        "neck": 34.0,
        "hip": 96.5,
        "muscle_percentage": "29%",
        "fat_percentage": "26%"
    },
    {
        "date": "2023-06-12",
        "weight": 75.1,
        "waist": 85.5,
        "neck": 33.5,
        "hip": 95.0,
        "muscle_percentage": "31%",
        "fat_percentage": "24%"
    },
    {
        "date": "2023-06-26",
        "weight": 73.5,
        "waist": 84.0,
        "neck": 33.0,
        "hip": 93.5,
        "muscle_percentage": "33%",
        "fat_percentage": "22%"
    }
]

export const payReports = [
    {
        "billing_type": "Monthly",
        "nutri_email": "john.doe@example.com",
        "nutri_fullname": "John Doe",
        "credit_card": "**** **** **** 1234",
        "total": 100.0,
        "discount": "10%",
        "payment": 90.0
    },
    {
        "billing_type": "Yearly",
        "nutri_email": "jane.smith@example.com",
        "nutri_fullname": "Jane Smith",
        "credit_card": "**** **** **** 5678",
        "total": 500.0,
        "discount": "20%",
        "payment": 400.0
    },
    {
        "billing_type": "Monthly",
        "nutri_email": "alex.wilson@example.com",
        "nutri_fullname": "Alex Wilson",
        "credit_card": "**** **** **** 9012",
        "total": 75.0,
        "discount": "5%",
        "payment": 71.25
    },
    {
        "billing_type": "Yearly",
        "nutri_email": "emma.jones@example.com",
        "nutri_fullname": "Emma Jones",
        "credit_card": "**** **** **** 3456",
        "total": 800.0,
        "discount": "15%",
        "payment": 680.0
    },
    {
        "billing_type": "Monthly",
        "nutri_email": "mark.brown@example.com",
        "nutri_fullname": "Mark Brown",
        "credit_card": "**** **** **** 7890",
        "total": 50.0,
        "discount": "No discount",
        "payment": 50.0
    },
    {
        "billing_type": "Yearly",
        "nutri_email": "sarah.wilson@example.com",
        "nutri_fullname": "Sarah Wilson",
        "credit_card": "**** **** **** 2345",
        "total": 1000.0,
        "discount": "25%",
        "payment": 750.0
    },
    {
        "billing_type": "Monthly",
        "nutri_email": "michael.johnson@example.com",
        "nutri_fullname": "Michael Johnson",
        "credit_card": "**** **** **** 6789",
        "total": 120.0,
        "discount": "10%",
        "payment": 108.0
    },
    {
        "billing_type": "Yearly",
        "nutri_email": "emily.davis@example.com",
        "nutri_fullname": "Emily Davis",
        "credit_card": "**** **** **** 8901",
        "total": 900.0,
        "discount": "30%",
        "payment": 630.0
    },
    {
        "billing_type": "Monthly",
        "nutri_email": "robert.miller@example.com",
        "nutri_fullname": "Robert Miller",
        "credit_card": "**** **** **** 4567",
        "total": 60.0,
        "discount": "No discount",
        "payment": 60.0
    },
    {
        "billing_type": "Yearly",
        "nutri_email": "olivia.wilson@example.com",
        "nutri_fullname": "Olivia Wilson",
        "credit_card": "**** **** **** 0123",
        "total": 1500.0,
        "discount": "40%",
        "payment": 900.0
    }
]

export const unnaprovedProducts = [
    {
        "barcode": 1234567890,
        "name": "Apple",
        "size": 100.0,
        "calcium": 6.0,
        "sodium": 0.0,
        "carbs": 14.0,
        "fat": 0.0,
        "calories": 52.0,
        "iron": 0.1,
        "protein": 0.3
    },
    {
        "barcode": 2345678901,
        "name": "Banana",
        "size": 120.0,
        "calcium": 6.0,
        "sodium": 1.0,
        "carbs": 30.0,
        "fat": 0.4,
        "calories": 96.0,
        "iron": 0.3,
        "protein": 1.2
    },
    {
        "barcode": 3456789012,
        "name": "Chicken Breast",
        "size": 100.0,
        "calcium": 1.0,
        "sodium": 73.0,
        "carbs": 0.0,
        "fat": 1.6,
        "calories": 165.0,
        "iron": 0.9,
        "protein": 31.0
    },
    {
        "barcode": 4567890123,
        "name": "Egg",
        "size": 50.0,
        "calcium": 25.0,
        "sodium": 62.0,
        "carbs": 0.6,
        "fat": 4.8,
        "calories": 68.0,
        "iron": 0.7,
        "protein": 5.5
    },
    {
        "barcode": 5678901234,
        "name": "Salmon",
        "size": 100.0,
        "calcium": 12.0,
        "sodium": 59.0,
        "carbs": 0.0,
        "fat": 13.0,
        "calories": 206.0,
        "iron": 0.7,
        "protein": 22.0
    },
    {
        "barcode": 6789012345,
        "name": "Spinach",
        "size": 100.0,
        "calcium": 99.0,
        "sodium": 79.0,
        "carbs": 3.6,
        "fat": 0.4,
        "calories": 23.0,
        "iron": 2.7,
        "protein": 2.9
    },
    {
        "barcode": 7890123456,
        "name": "Oatmeal",
        "size": 40.0,
        "calcium": 15.0,
        "sodium": 2.0,
        "carbs": 27.0,
        "fat": 2.0,
        "calories": 150.0,
        "iron": 1.1,
        "protein": 5.0
    },
    {
        "barcode": 8901234567,
        "name": "Greek Yogurt",
        "size": 150.0,
        "calcium": 200.0,
        "sodium": 60.0,
        "carbs": 9.0,
        "fat": 0.9,
        "calories": 120.0,
        "iron": 0.2,
        "protein": 20.0
    },
    {
        "barcode": 9012345678,
        "name": "Broccoli",
        "size": 100.0,
        "calcium": 47.0,
        "sodium": 33.0,
        "carbs": 7.2,
        "fat": 0.6,
        "calories": 55.0,
        "iron": 0.7,
        "protein": 3.7
    },
    {
        "barcode": 1234567891,
        "name": "Almonds",
        "size": 28.0,
        "calcium": 75.0,
        "sodium": 0.0,
        "carbs": 6.0,
        "fat": 14.0,
        "calories": 160.0,
        "iron": 1.1,
        "protein": 6.0
    }
]
