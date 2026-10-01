export default {
  async login(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCu9TMuAMY3W1RyYaM-YcUDI3r0e7lmybU',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.error?.message || 'Failed to authenticate'
      );
      throw error;
    }

    console.log(responseData);

    context.commit('setUser', {
      token: responseData.idToken,
      email: responseData.email,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },

  async signup(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCu9TMuAMY3W1RyYaM-YcUDI3r0e7lmybU',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.error?.message || 'Failed to authenticate'
      );
      throw error;
    }

    console.log(responseData);

    context.commit('setUser', {
      token: responseData.idToken,
      email: responseData.email,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
};

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCu9TMuAMY3W1RyYaM-YcUDI3r0e7lmybU",
//   authDomain: "vue-http-demo-2048a.firebaseapp.com",
//   databaseURL: "https://vue-http-demo-2048a-default-rtdb.firebaseio.com",
//   projectId: "vue-http-demo-2048a",
//   storageBucket: "vue-http-demo-2048a.firebasestorage.app",
//   messagingSenderId: "333176756704",
//   appId: "1:333176756704:web:4a4cd59a72c0b284967385",
//   measurementId: "G-MM7VJTT2XM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
