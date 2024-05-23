import HeaderParagraph from "../../components/utilityParts/HeaderParagraph/HeaderParagraph";
import css from "./ToDoTodayPage.module.css";

export default function ToDoToday() {
  const headerParagraph =
    "See your list of tasks, all in one place, in a descending priority order (which is subjective, of course). The most urgent are considered to be four daily commissions as they bring you a good amount of primogems, followed by ascension materials which are restrained to be farmed on specific days of week. Last but not least, you can add your own ToDo items with or without their individual timers";

  return (
    <>
      <h1>ToDo Today</h1>
      <HeaderParagraph text={headerParagraph} />

      <h2 className={css.todoheader}>Dailies</h2>
      <p>
        Check off when done. Activities reset at 4am (server time), so will the
        check marks.
      </p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <hr />
      <h2 className={css.todoheader}>Farm Today</h2>
      <p>
        These are the artifacts and materials you need for character/weapon
        ascension. The info is aggregated from FarmDashboard, be sure to keep it
        up-to-date. Once you check off an item, it will disappear from here, but
        you can still get it back on FarmDashboard if needed.
      </p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <hr />
      <h2 className={css.todoheader}>Weekly</h2>
      <p>(until next Monday)</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <hr />
      <h2 className={css.todoheader}>Manual ToDos</h2>
      <p>(can be with or without individual timers)</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}
