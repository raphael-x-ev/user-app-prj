import styles from "../styles/addNewUser.module.css";

const addNewUser = () => {
  return (
    <div>
      <form className={styles.userForm}>
        <fieldset>
          {/* <div className={styles.avatar}>
            <img className={styles.avatarImg} src="" />
            <input id="to-hide" type="file" onchange="previewFile()" />
            <input
              type="button"
              className={styles.avatar}
              value="Edit"
              onClick="document.getElementById('to-hide').click()"
            />
          </div> */}
          <h2 className={styles.title}>Add User</h2>
          <h3 className={styles.subtitle}>
            Please provide complete information.
          </h3>
          <input type="text" name="fullName" placeholder="Full Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="pass" placeholder="Password" />
          <input type="password" name="cpass" placeholder="Confirm Password" />
          <input
            type="submit"
            name="submit"
            className={styles.submitButton}
            value="Submit"
          />
        </fieldset>
        <fieldset>
          <h2 className="fs-title">Social Profiles</h2>
          <h3 className="fs-subtitle">Your presence on the social network</h3>
          <input type="text" name="twitter" placeholder="Twitter" />
          <input type="text" name="facebook" placeholder="Facebook" />
          <input type="text" name="gplus" placeholder="Google Plus" />
          <input
            type="button"
            name="previous"
            className="previous action-button"
            value="Previous"
          />
          <input
            type="button"
            name="next"
            className="next action-button"
            value="Next"
          />
        </fieldset>
        <fieldset>
          <h2 className="fs-title">Personal Details</h2>
          <h3 className="fs-subtitle">We will never sell it</h3>
          <input type="text" name="fname" placeholder="First Name" />
          <input type="text" name="lname" placeholder="Last Name" />
          <input type="text" name="phone" placeholder="Phone" />
          <textarea name="address" placeholder="Address"></textarea>
          <input
            type="button"
            name="previous"
            className="previous action-button"
            value="Previous"
          />
          <input
            type="submit"
            name="submit"
            className="submit action-button"
            value="Submit"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default addNewUser;
