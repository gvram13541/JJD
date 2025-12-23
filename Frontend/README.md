# JJD

## Backend
1. To start the server `python manage.py runserver`
2. To Update the changes in the databases after updating the models.py `python manage.py makemigrations`
3. To apply the above changes made `python manage.py migrate`
4. To open the database shell `python manage.py dbshell`


## Frontend
1. To start the react + vite app `npm run dev`


## Learning in frontend
1. While building any react apps you can navigate in two ways:<br>
    a. By leaveraging the reacts single page functionality:<br>
        i. make use of reacts components, pass parameters to these components which are called as props.<br>
        ii. Login and Register page navigations in this app are examples fot this type of navigation.<br>
    b.By using reacts routers and route as a differt link, that loads the new page.<br>
        i. For example /, /login, /register.<br>
        ii.Despite the URL changing, React still prevents a full page reload — it remains a single-page app under the hood.<br>
2. Cross-Origin Cookie Transmission: For session-based authentication between a frontend (e.g., localhost:5173) and a backend (e.g., localhost:8000), you must explicitly instruct the browser to send cookies in the cross-origin request.
    a. This is achieved by setting credentials: 'include' (for fetch) or withCredentials: true (for axios) on the frontend API call.
3. State updates in React are asynchronous
    a. Calling setState does not immediately update the state variable.<br>
    b. Logging state right after setState will show old values.<br>
    c. To observe updated state, use `useEffect` with the state as a dependency.
4. Never call a state-updating function inside another state setter
    a. State setter callbacks `(setState(prev => { ... }))` must be pure functions.<br>
    b. Calling another function that updates state inside them causes unpredictable behavior.<br>
    c. Each state update should be handled independently.
5. Immutable updates are mandatory in React state
    a. React does not merge nested objects automatically.<br>
    b. When updating nested state, always spread previous values (...prev).<br>
    c. Example: updating quantity without spreading removes fields like productId.

## Learning in Backend
1. Only validation credentials is not proper authentication, sending a seesion id or token for every api is a proper authentication.
2. sessions won't be created in django for POST calls due to csrf, to by pass this use csrf excempt decorator.
3. We can't directly apply decorators to classes as decorators are wrappers around methods. Using `@method_decorator` allows us to apply a function decorator to a class method, specifying the target method (like 'dispatch').
4. Generally APIView calls the `dispatch()` method, which then calls your methods inside the class based on the request made.
5. Cross-Origin Session Persistence (Cookie Issue): Maintaining a session across different ports/origins (Frontend $\to$ Backend) requires careful configuration of cookie attributes in `settings.py`.
    a. Setting `SESSION_COOKIE_SAMESITE = "None"` and `CSRF_COOKIE_SAMESITE = "None"` allows cross-site requests, but requires setting the cookies to `Secure=True` in modern browsers, which mandates running the backend over HTTPS.
    b. For local HTTP development, setting `SESSION_COOKIE_SAMESITE = "Lax"` and `CSRF_COOKIE_SAMESITE = "Lax"` is generally the easier workaround.
6. Domain Consistency is Critical: Browsers treat `localhost` and `127.0.0.1` as entirely separate domains for cookie purposes, even though they point to the same machine.
    a. struggled here as I gave localhost and 127.0.0.1 both in cross orging setting in settings.py file.
    b. Ensure the URL used by the frontend to make API calls (eg: address.jsx: fetch('http://localhost:8000/...')) exactly matches the host Django uses to set cookies (which should also be localhost). Inconsistent usage (e.g., fetching to 127.0.0.1 after logging in to localhost) will cause the session cookie to be dropped, resulting in a 401 Unauthorized error.
7. You can remove `TEMPLATES`, `STATIC_URL`, `AUTH_PASSWORD_VALIDATORS`(not using built-in user model) if youare not serving static files, html templates in the backend.