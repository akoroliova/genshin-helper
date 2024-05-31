import Navigation from "./Navigation/Navigation";
import css from "./Layout.module.css";

//This container wraps Routes in App.jsx and renders everything that is returned by Routes as {children}

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Navigation />
      {children}
    </div>
  );
}
