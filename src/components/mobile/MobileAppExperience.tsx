import React, { useState } from 'react';
import { MobileTab, OperatingMode } from '../../types';
import { MobileNavBar } from './MobileNavBar';
import { PreparednessHub } from './PreparednessHub';
import { EvacuationRadar } from './EvacuationRadar';
import { RouteComparisonModal } from './RouteComparisonModal';
import { LiveGuidanceHUD } from './LiveGuidanceHUD';
import { SafeHavenDossier } from './SafeHavenDossier';
import { CitizenVerificationDossier } from './CitizenVerificationDossier';
import { SmsGatewayView } from './SmsGatewayView';
import { AuthorityIncidentModeration } from './AuthorityIncidentModeration';
import { ProfileAccessibilityView } from './ProfileAccessibilityView';

interface MobileAppExperienceProps {
  initialTab?: MobileTab;
  initialMode?: OperatingMode;
  activeTab?: MobileTab;
  onTabChange?: (tab: MobileTab) => void;
}

export const MobileAppExperience: React.FC<MobileAppExperienceProps> = ({
  initialTab = 'radar',
  initialMode = 'emergency',
  activeTab: controlledActiveTab,
  onTabChange,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState<MobileTab>(
    controlledActiveTab || initialTab
  );
  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;
  const [operatingMode, setOperatingMode] = useState<OperatingMode>(initialMode);
  const [activeScreen, setActiveScreen] = useState<
    | 'hub'
    | 'radar'
    | 'route_comparison'
    | 'live_guidance'
    | 'shelter_detail'
    | 'citizen_dossier'
    | 'sms_gateway'
    | 'authority_console'
    | 'profile'
  >(activeTab === 'preparedness' ? 'hub' : 'radar');

  // Keep screen synchronized when controlledActiveTab updates externally
  React.useEffect(() => {
    if (controlledActiveTab !== undefined) {
      setInternalActiveTab(controlledActiveTab);
      switch (controlledActiveTab) {
        case 'radar':
          setActiveScreen('radar');
          break;
        case 'preparedness':
          setActiveScreen('hub');
          break;
        case 'safe_zones':
          setActiveScreen('shelter_detail');
          break;
        case 'dossier':
          setActiveScreen('citizen_dossier');
          break;
        case 'profile':
          setActiveScreen('profile');
          break;
      }
    }
  }, [controlledActiveTab]);

  // Handle Tab Navigation smoothly
  const handleTabChange = (tab: MobileTab) => {
    setInternalActiveTab(tab);
    onTabChange?.(tab);
    switch (tab) {
      case 'radar':
        setActiveScreen('radar');
        break;
      case 'preparedness':
        setActiveScreen('hub');
        break;
      case 'safe_zones':
        setActiveScreen('shelter_detail');
        break;
      case 'dossier':
        setActiveScreen('citizen_dossier');
        break;
      case 'profile':
        setActiveScreen('profile');
        break;
    }
  };

  const isLiveGuidance = activeScreen === 'live_guidance';

  return (
    <div className="relative w-full h-full flex flex-col bg-[#FAF9F9] overflow-x-hidden font-body text-[#1A1C1C]">
      {/* Scrollable Screen Content Container */}
      <div className={`flex-1 w-full overflow-y-auto ${isLiveGuidance ? 'p-0' : 'no-scrollbar'}`}>
        {activeScreen === 'hub' && (
          <PreparednessHub
            operatingMode={operatingMode}
            onToggleMode={(mode) => {
              setOperatingMode(mode);
              if (mode === 'emergency' || mode === 'drill') {
                setActiveScreen('radar');
                handleTabChange('radar');
              }
            }}
            onNavigateToRoute={() => setActiveScreen('route_comparison')}
            onNavigateToSOS={() => setActiveScreen('sms_gateway')}
            onNavigateToShelter={() => {
              setActiveScreen('shelter_detail');
              handleTabChange('safe_zones');
            }}
            onNavigateToSMS={() => setActiveScreen('sms_gateway')}
          />
        )}

        {activeScreen === 'radar' && (
          <EvacuationRadar
            onStartEvacuation={() => setActiveScreen('live_guidance')}
            onRequestRescue={() => setActiveScreen('sms_gateway')}
            onViewRouteDetails={() => setActiveScreen('route_comparison')}
            onViewShelterDetails={() => {
              setActiveScreen('shelter_detail');
              handleTabChange('safe_zones');
            }}
          />
        )}

        {activeScreen === 'route_comparison' && (
          <RouteComparisonModal
            onBack={() => setActiveScreen('radar')}
            onConfirmSafestRoute={() => setActiveScreen('live_guidance')}
          />
        )}

        {activeScreen === 'live_guidance' && (
          <LiveGuidanceHUD
            onBack={() => setActiveScreen('radar')}
            onEndRoute={() => setActiveScreen('radar')}
            onShelterCheckIn={() => {
              setActiveScreen('shelter_detail');
              handleTabChange('safe_zones');
            }}
          />
        )}

        {activeScreen === 'shelter_detail' && (
          <SafeHavenDossier
            onBack={() => {
              setActiveScreen('radar');
              handleTabChange('radar');
            }}
            onGetDirections={() => setActiveScreen('live_guidance')}
            onOpenHomeVolunteer={() => alert('Host registration opened for verified citizens.')}
          />
        )}

        {activeScreen === 'citizen_dossier' && (
          <CitizenVerificationDossier
            onBack={() => {
              setActiveScreen('radar');
              handleTabChange('radar');
            }}
            onSelectDetour={() => setActiveScreen('route_comparison')}
          />
        )}

        {activeScreen === 'sms_gateway' && (
          <SmsGatewayView
            onBack={() => {
              setActiveScreen('radar');
              handleTabChange('radar');
            }}
            onFollowCompass={() => setActiveScreen('live_guidance')}
          />
        )}

        {activeScreen === 'authority_console' && (
          <AuthorityIncidentModeration
            onBack={() => {
              setActiveScreen('profile');
              handleTabChange('profile');
            }}
            onBroadcastApproved={() => {
              setActiveScreen('radar');
              handleTabChange('radar');
            }}
          />
        )}

        {activeScreen === 'profile' && (
          <ProfileAccessibilityView
            onBack={() => {
              setActiveScreen('radar');
              handleTabChange('radar');
            }}
            onOpenAuthorityConsole={() => setActiveScreen('authority_console')}
          />
        )}
      </div>

      {/* Global Bottom Tab Bar (hidden during active turn-by-turn HUD) */}
      {!isLiveGuidance && (
        <MobileNavBar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          activeEmergency={operatingMode !== 'peacetime'}
        />
      )}
    </div>
  );
};
