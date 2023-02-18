import { getSession } from 'next-auth/client';

import UserProfile from '../components/profile/user-profile';

function ProfilePage() {
  return <UserProfile />;
}

export async function getServerSideProps(context){
  const session = await getSession({req:context.req});

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanant: false,
      }
    }
  }

  return {
    props:{session}
  }
}

export default ProfilePage;
