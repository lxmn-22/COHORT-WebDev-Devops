# Authentication, JSON Web Token(JWTs)

    Bank Example:
    
    1. Let say, PersonA is SBI Manager and PersonB is Laxman.
    2. Laxman opens a bank account in SBI, after talking with the manager.
    3. Bank account opened.
    4. Laxman deposited some money.
    5. Bank issued cheque to Laxman.
    6. Now, I can make payments using cheques, receiver submit that to bank and they'll authenticate and if correct, they'll give the declared money to the person.
    7. Now, cheques can be misused, can duplicate cheque, can misuse signature, signature gets exposed.
    8. But, Bank won't accept theirs, will only accept my cheque not the duplicate one.
    - My Cheque Book == my json web token
    9. As bank provides me cheque book, when we sign-up with any of the website in return it provide us JWT.
    10. JWTs are just like cheques, they are issued by the Backend when we sign-in, anyone can create something very similar, but the backend would reject it, if we lose the original JWT.