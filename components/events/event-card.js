import styles from './event-card.module.css'
import Image from 'next/image'

export default function EventCard() {
  return <div className={styles.eventCard + ' ' + styles.dungeon}>
    <header>
        <div className={styles.cardPrimary}>
            <div className={styles.eventTitle}>This Cool Event</div>
            <div className={styles.eventType}>Raid - Vow of the Deciple</div>
            <div className={styles.eventDescription}>This is a cool description for a cool event</div>
        </div>
        <div className={styles.cardStatus}>
            <div className={styles.eventDate}>Friday, Sep 22nd</div>
            <div className={styles.eventTime}>5:00 PM CST</div>
        </div>
    </header>
    <content>
        <div className={styles.joinColumn}>
            <div className={styles.joinTitle}>Joined</div>
            <div className={styles.joinedMembers}>digitalFlame, Brozine, snek</div>
        </div>
        <div className={styles.joinColumn}>
            <div className={styles.joinTitle}>Alternates</div>
            <div className={styles.joinedMembers}>digitalFlame, Brozine, snek</div>
        </div>
        <div className={styles.joinColumn}>
            <div className={styles.joinTitle}>Interested</div>
            <div className={styles.joinedMembers}>digitalFlame, Brozine, snek</div>
        </div>
    </content>
    <footer>
        <div className={styles.createdBy}>Created by digitalFlame</div>
        <div className={styles.eventCreated}>2022-09-01 5:00 PM CST</div>
    </footer>
  </div>
}