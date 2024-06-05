'use client';

import { useSocialAuthenticateMutation } from '@/redux/features/authApiSlice';
import { useSocialAuth } from '@/hooks';
import { Spinner } from '@/components/common';
import { Suspense } from 'react';

export default function Page() {
	const [googleAuthenticate] = useSocialAuthenticateMutation();
	const dest = "google-oauth2";
	// useSocialAuth hook needs to be wrapped in a Suspense component
	<Suspense fallback={<Spinner lg />}>; 
	useSocialAuth(googleAuthenticate, dest);
	</Suspense>

	return (
		<div className='my-8'>
			<Spinner lg />
		</div>
	);
}