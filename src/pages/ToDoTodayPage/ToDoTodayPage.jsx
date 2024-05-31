import HeaderParagraph from "../../components/shared/HeaderParagraph/HeaderParagraph";
import UncontrolledInput from "../../components/shared/forms/UncontrolledInput";
import Filter from "./Filter/Filter";
import TaskList from "./TaskList/TaskList";
import css from "./ToDoTodayPage.module.css";

const headerParagraph =
  "See your list of tasks, all in one place, in a descending priority order (which is subjective, of course). The most urgent are considered to be four daily commissions as they bring you a good amount of primogems, followed by ascension materials which are restrained to be farmed on specific days of week. Last but not least, you can add your own ToDo items with or without their individual timers";

export default function ToDoTodayPage({
  addTask,
  filter,
  setFilter,
  visibleTasks,
  deleteTask,
}) {
  return (
    <>
      <h1>ToDo Today</h1>
      <HeaderParagraph text={headerParagraph} />

      <hr />

      <h2 className={css.todoheader}>Dailies</h2>
      <p>
        Check off when done. Activities reset at 4am (server time), so will the
        check marks.
      </p>
      <ul>
        <li>Expeditions</li>
        <li>daily web login</li>
        <li>коваль дасть локації з камінням (Mondstadt, Liue, Inazuma)</li>
        <li>Home Pot garden, currency gather, craft, merchant</li>
        <li>
          Daily Commissions (at least progress 1st stage of each to have them
          transfer to tomorrow)
        </li>
        <li>
          Spending Original Resin on trounces/domains/bosses/ley line blossoms
        </li>
        <li>battle pass daily objectives</li>
        <li>fishing</li>
        <li>
          Anemo/Geo/.. Sigil bargains, Electro Sigil offering to Sacred Sakura
        </li>
        <li>
          в кінці злити resin, що залишається невикористаною, на кристали у
          коваля і на круту резину на крафт станції
        </li>
      </ul>

      <hr />

      <h2 className={css.todoheader}>Farm Today</h2>
      <p>
        These are the artifacts and materials you need for character/weapon
        ascension. The info is aggregated from FarmDashboard, be sure to keep it
        up-to-date. Once you check off an item, you can still get it back via
        FarmDashboard if needed.
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
        <li>Reputation</li>
        <li>Trounces (3 weekly bosses)</li>
        <li>Purchase Transient Resin from Tubby at home</li>
        <li>
          battle pass weekly objectives (trial counts as a domain challenge!)
        </li>
      </ul>

      <hr />

      <h2 className={css.todoheader}>Manual ToDos</h2>
      <p>(can be with or without individual timers)</p>
      <UncontrolledInput onAdd={addTask} />
      <hr />
      <Filter value={filter} onFilter={setFilter} />
      <hr />
      <TaskList items={visibleTasks} onDelete={deleteTask} />
    </>
  );
}
