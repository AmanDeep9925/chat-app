import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: 'AIzaSyBGtOtwv7h88BCQ0CMQGJoaKnKqpDhsXMY',
    authDomain: 'chat-app-8f537.firebaseapp.com',
    databaseURL: 'https://chat-app-8f537.firebaseio.com',
    projectId: 'chat-app-8f537',
    storageBucket: 'chat-app-8f537.appspot.com',
    messagingSenderId: '378489184541',
    appId: '1:378489184541:web:089fc2749f428397ec41f4',
    measurementId: 'G-DDDWCRW4VH',
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
