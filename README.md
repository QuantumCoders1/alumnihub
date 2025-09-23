### This guide will help you set up Alumni Management Platform on your local machine.


clone the project into your local machine:  
```
git clone https://github.com/QuantumCoders1/alumnihub.git
```


------------------------------------------
#### For Frontend:

Open the Repository folder in your preferred IDLE and in terminal Redirect to the frontend folder
```
cd alumnihub
```  

Run npm install install required dependencies
```
npm install
```

Start the React development server:
```
npm run dev
```

The app should open automatically in your browser at port 5173 (varies from system to system):
```
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```


------------------------------------------
#### For Backend:

Open the Repository folder in your preferred IDLE and in a NEW terminal Redirect to the backend folder
```
cd server
```

Install dependencies:
```
npm install
```

Start the backend server:
```
node server.js
```

You should see:
```
MongoDB connected ✅
Server running on port 5000 🚀
```