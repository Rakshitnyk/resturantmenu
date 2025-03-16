import styles from "./Profile.module.css"
import { ChevronLeft, Phone, Mail, MapPin, Trophy, Bell, ArrowLeftRight, Home, Percent, User } from "lucide-react"

const Profile = ({
  name = "James Hawkins",
  memberStatus = "GOLD MEMBER",
  phone = "+12 345 678 92",
  email = "jameshawkins@mail.com",
  address = "Franklin Avenue, Corner St.London, 24125151",
  profileImage = "/placeholder.svg",
}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton}>
          <ChevronLeft />
          Profile
        </button>
      </header>

      <div className={styles.profileSection}>
        <div className={styles.profileImageWrapper}>
          <img src={profileImage || "/placeholder.svg"} alt="Profile" className={styles.profileImage} />
        </div>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.memberStatus}>{memberStatus}</div>
      </div>

      <section className={styles.contactsSection}>
        <div className={styles.sectionHeader}>
          <h2>Contacts</h2>
          <button className={styles.editButton}>Edit</button>
        </div>

        <div className={styles.contactList}>
          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <Phone className={styles.icon} />
            </div>
            <div className={styles.contactDetails}>
              <span className={styles.label}>Mobile Phone</span>
              <span className={styles.value}>{phone}</span>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <Mail className={styles.icon} />
            </div>
            <div className={styles.contactDetails}>
              <span className={styles.label}>Email Address</span>
              <span className={styles.value}>{email}</span>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <MapPin className={styles.icon} />
            </div>
            <div className={styles.contactDetails}>
              <span className={styles.label}>Address</span>
              <span className={styles.value}>{address}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rewardSection}>
        <div className={styles.sectionHeader}>
          <h2>
            Your Reward
            <Trophy className={styles.trophyIcon} />
          </h2>
          <button className={styles.historyButton}>History</button>
        </div>
      </section>

      <nav className={styles.navigation}>
        <button className={styles.navButton}>
          <Bell />
        </button>
        <button className={styles.navButton}>
          <ArrowLeftRight />
        </button>
        <button className={styles.navButton}>
          <Home />
        </button>
        <button className={styles.navButton}>
          <Percent />
        </button>
        <button className={styles.navButton}>
          <User />
        </button>
      </nav>
    </div>
  )
}

export default Profile