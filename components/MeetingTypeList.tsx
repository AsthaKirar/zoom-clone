"use client"
import { useState } from 'react'
import HomeCard from './ui/HomeCard'
import { useRouter } from 'next/navigation'

const MeetingTypeList = () => {
    const route = useRouter();
    const [meetingState, setmeetingState] = useState<'isSchedulMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description = "Start an instant meeting"
        handleClick={() => setmeetingState('isJoiningMeeting')}
        className="bg-[#FF742E]"/>
        <HomeCard
        
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description = "Planing your meeting"
        handleClick={() => setmeetingState('isSchedulMeeting')}
        className="bg-[#0E78F9]"/>
        <HomeCard 
        img="/icons/recordings.svg"
        title="View Recordings"
        description = "Check out your recordings"
        handleClick={() => setmeetingState('isJoiningMeeting')}
        className="bg-[#830EF9]"/>
        <HomeCard 
        
        img="/icons/join-meeting.svg"
        title="New Meeting"
        description = "via invitation"
        handleClick={() => setmeetingState('isJoiningMeeting')}
        className="bg-[#F9A90E]"/>

    </section>
  )
}

export default MeetingTypeList
