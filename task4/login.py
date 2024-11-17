# Simple Login Authentication System

# Dictionary to store user credentials
users = {}

def register():
    print("\n--- Register ---")
    username = input("Enter a username: ")
    if username in users:
        print("Username already exists. Try a different one.")
        return
    password = input("Enter a password: ")
    users[username] = password
    print("Registration successful!")

def login():
    print("\n--- Login ---")
    username = input("Enter your username: ")
    password = input("Enter your password: ")
    if username in users and users[username] == password:
        print("Login successful!")
        secured_page(username)
    else:
        print("Invalid username or password.")

def secured_page(username):
    print(f"\n--- Secured Page ---")
    print(f"Welcome, {username}! You have accessed the secured page.")

def main():
    while True:
        print("\n1. Register")
        print("2. Login")
        print("3. Exit")
        choice = input("Enter your choice: ")
        
        if choice == "1":
            register()
        elif choice == "2":
            login()
        elif choice == "3":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

# Run the program
if __name__ == "__main__":
    main()
