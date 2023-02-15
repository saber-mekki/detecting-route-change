import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { useBlocker } from "./useBlocker";

export function useCallbackPrompt(when: boolean): (boolean | (() => void))[] {
	const navigate = useNavigate();
	const location = useLocation();
	const [showModal, setShowModal] = useState(false);
	const [lastLocation, setLastLocation] = useState<any>(null);
	const [confirmedNavigation, setConfirmedNavigation] = useState(false);

	const cancelNavigation = useCallback(() => {
		setShowModal(false);
		setLastLocation(null);
	}, []);

	const handleBlockedNavigation = useCallback(
		(nextLocation:any) => {
			if (
				!confirmedNavigation &&
				nextLocation.location.pathname !== location.pathname
			) {
				setShowModal(true);
				setLastLocation(nextLocation);
				return false;
			}
			return true;
		},
		[confirmedNavigation, location]
	);

	const confirmNavigation = useCallback(() => {
		setShowModal(false);
		setConfirmedNavigation(true);
	}, []);

	useEffect(() => {
		if (confirmedNavigation && lastLocation) {
			navigate(lastLocation.location?.pathname);

			setConfirmedNavigation(false);
		}
	}, [confirmedNavigation, lastLocation, navigate]);

	useBlocker(handleBlockedNavigation, when);

	return [showModal, confirmNavigation, cancelNavigation];
}
