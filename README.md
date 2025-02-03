# **Binary Magic Card (16-bit Date Guessing Game)**

This is a magic card trick using a binary method to guess a 16-bit number. In this game, the user will try to guess a number, and the system will help determine that number based on their selections from five cards.

## **Theory:**

In this system, the **Binary Magic Card Trick** uses 5 cards to display 16-bit data. The user will mentally select a number, and the system will try to determine that number based on their selections.

### **How it works:**

1. **Card Distribution:**

   - 5 cards are used, and each card contains a set of numbers. Each card represents a specific bit of the binary number.
     - **id 1:** Represents the first bit of the binary number.
     - **id 2:** Represents the second bit.
     - **id 4:** Represents the third bit.
     - **id 8:** Represents the fourth bit.
     - **id 16:** Represents the fifth bit.

2. **Card Selection:**

   - Each card contains several numbers that belong to a specific binary bit. For instance:
     - **id: 1** contains numbers like [1, 3, 5, 7, 9] (numbers where the first bit is 1).
     - **id: 2** contains numbers like [2, 3, 6, 7, 10] (numbers where the second bit is 1), and so on.

3. **User Selection:**

   - The user thinks of a number and selects the cards that contain their number. If the number appears in the card, the user will select that card; otherwise, they won't.

4. **Binary Conversion:**

   - Based on the user's selections, the system will form a binary number by adding the bits from the selected cards. For example:
     - If the user selects cards with **id 1, id 2, id 8, and id 16**, the binary number will be: `11111` which equals `31`.

5. **Number Output:**
   - Finally, the system will convert the binary number into the actual number that the user was thinking of.

### **Algorithm:**

1. **Step 1:** Display 5 cards to the user, each with a set of numbers.
2. **Step 2:** The user mentally picks a number.
3. **Step 3:** The system shows the cards and asks the user to select the ones containing their number.
4. **Step 4:** Based on the user's selection, the system generates a binary number.
5. **Step 5:** The system converts the binary number into the corresponding actual number.

This algorithm allows the system to guess a number using a simple binary method.

## **Simulation:**

To simulate this, the following steps will occur:

1. The user selects cards based on the numbers that they mentally choose.
2. The system then generates a binary number from the cards selected.
3. Finally, the system converts the binary number into the corresponding number.

For example, if the user selects cards with **id 1, id 2, id 8, and id 16**, the binary number formed will be: `11111`, which equals `31`.

## **Application:**

### **Case Study 1: Guessing a Number**

Let’s take the case where the user thinks of the number **31**.

1. The system shows 5 cards containing the numbers:

   - Card 1: Contains numbers like [1, 3, 5, 7, 9].
   - Card 2: Contains numbers like [2, 3, 6, 7, 10].
   - Card 4: Contains numbers like [4, 5, 6, 7, 12].
   - Card 8: Contains numbers like [8, 9, 10, 11, 12].
   - Card 16: Contains numbers like [16, 17, 18, 19, 20].

2. The user selects the cards based on their chosen number **31**:

   - Card 1 (id 1): **Selected**.
   - Card 2 (id 2): **Selected**.
   - Card 4 (id 4): **Selected**.
   - Card 8 (id 8): **Selected**.
   - Card 16 (id 16): **Selected**.

3. The binary number formed is: `11111` which equals `31`.
4. The system successfully identifies that the user thought of the number **31**.

### **Case Study 2: Guessing Another Number**

Let’s take the case where the user thinks of the number **17**.

1. The system shows 5 cards:

   - Card 1: Contains numbers like [1, 3, 5, 7, 9].
   - Card 2: Contains numbers like [2, 3, 6, 7, 10].
   - Card 4: Contains numbers like [4, 5, 6, 7, 12].
   - Card 8: Contains numbers like [8, 9, 10, 11, 12].
   - Card 16: Contains numbers like [16, 17, 18, 19, 20].

2. The user selects the cards based on their chosen number **17**:

   - Card 1 (id 1): **Selected**.
   - Card 2 (id 2): **No** selection.
   - Card 4 (id 4): **No** selection.
   - Card 8 (id 8): **No** selection.
   - Card 16 (id 16): **Selected**.

3. The binary number formed is: `10001` which equals `17`.
4. The system successfully identifies that the user thought of the number **17**.

---

This game allows users to use their own mental calculations to play and let the system guess their thought number using simple binary-based logic. It is an interactive and engaging game that illustrates the power of binary number systems in a practical way.

![Simulation Binary Magic Game](/public/simulation.png)

[Video](https://www.facebook.com/rafeuddaraj1/videos/1126888772479894)

> I was inspired by this video of [Rafa](https://www.facebook.com/share/v/1DGiHhZPQ5/) and basically built this game. I had some free time and had some fun.



## 🛠 Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/rafeuddaraj/Binary-Magic.git
   ```

2. Navigate into the project directory:
   ```bash
   cd Binary-Magic
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open your browser and go to `http://localhost:3000`.

## 🧑‍💻 Contributing

We welcome contributions from everyone! To contribute:

1. **Fork** this repository to your GitHub account.
2. **Clone** your forked repository to your local machine.
   ```bash
   git clone https://github.com/rafeuddaraj/Binary-Magic.git
   ```
3. Create a **new branch** for your changes:
   ```bash
   git checkout -b feature/my-awesome-feature
   ```
4. Make your changes and **commit** them:
   ```bash
   git add .
   git commit -m "Add feature: My awesome feature"
   ```
5. Push your changes to your forked repository:
   ```bash
   git push origin feature/my-awesome-feature
   ```
6. Create a **Pull Request** (PR) from your forked repository to the main repository.

### Guidelines

- Write clear and concise commit messages.
- Follow the existing code style.
- Make sure to add tests for new features or bug fixes.

