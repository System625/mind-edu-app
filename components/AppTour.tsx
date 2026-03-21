'use client';

import { useEffect, useState } from 'react';
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';
import { useTour } from '@/contexts/TourContext';

const steps: Step[] = [
  {
    target: 'body',
    placement: 'center',
    disableBeacon: true,
    title: 'Welcome to MindEdu Hub!',
    content:
      'This quick tour will show you around. Learn about mental health, take quizzes, journal your thoughts, and use coping tools — all in one place.',
  },
  {
    target: '[data-tour="nav-modules"]',
    placement: 'bottom',
    disableBeacon: true,
    title: 'Learning Modules',
    content:
      'Explore evidence-based mental health topics through structured, bite-sized lessons.',
  },
  {
    target: '[data-tour="nav-quizzes"]',
    placement: 'bottom',
    disableBeacon: true,
    title: 'Quizzes',
    content:
      'Test your knowledge and track your scores over time with our interactive quizzes.',
  },
  {
    target: '[data-tour="nav-dashboard"]',
    placement: 'bottom',
    disableBeacon: true,
    title: 'Your Dashboard',
    content:
      'See your progress at a glance — modules completed, quiz scores, and recent activity.',
  },
  {
    target: '[data-tour="nav-coping"]',
    placement: 'bottom',
    disableBeacon: true,
    title: 'Coping Tools',
    content:
      'When you need a moment, use breathing exercises or journaling to support your wellbeing.',
  },
  {
    target: '[data-tour="tour-trigger"]',
    placement: 'bottom',
    disableBeacon: true,
    title: "That's it!",
    content:
      "You're all set. Click the compass icon any time to replay this tour. Enjoy your journey!",
  },
];

export default function AppTour() {
  const { tourActive, endTour } = useTour();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCallback = (data: CallBackProps) => {
    const { status } = data;
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      endTour();
    }
  };

  if (!mounted) return null;

  return (
    <Joyride
      steps={steps}
      run={tourActive}
      continuous
      showProgress
      showSkipButton
      scrollToFirstStep
      spotlightClicks={false}
      callback={handleCallback}
      styles={{
        options: {
          // Matches --primary: oklch(0.55 0.15 220) calming blue
          primaryColor: 'oklch(0.55 0.15 220)',
          // Matches --card: oklch(1 0 0) light / oklch(0.22 0.02 240) dark
          backgroundColor: '#ffffff',
          // Matches --foreground: oklch(0.25 0.02 250)
          textColor: '#2d3450',
          arrowColor: '#ffffff',
          overlayColor: 'rgba(18, 24, 48, 0.55)',
          zIndex: 10000,
        },
        tooltip: {
          borderRadius: '20px',
          padding: '24px 28px',
          boxShadow: '0 8px 40px rgba(60, 90, 180, 0.12), 0 2px 8px rgba(0,0,0,0.08)',
          border: '1px solid oklch(0.90 0.01 220)',
        },
        tooltipTitle: {
          fontSize: '15px',
          fontWeight: 700,
          color: '#2d3450',
          marginBottom: '8px',
          letterSpacing: '-0.01em',
        },
        tooltipContent: {
          fontSize: '14px',
          lineHeight: '1.65',
          color: '#5a6480',
          padding: '0',
        },
        tooltipFooter: {
          marginTop: '20px',
          gap: '8px',
        },
        buttonNext: {
          backgroundColor: 'oklch(0.55 0.15 220)',
          borderRadius: '999px',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '9px 22px',
          color: '#ffffff',
          border: 'none',
        },
        buttonBack: {
          color: '#5a6480',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginRight: '4px',
          background: 'transparent',
          border: 'none',
        },
        buttonSkip: {
          color: '#9ba3bf',
          fontSize: '12px',
          fontWeight: 500,
          background: 'transparent',
          border: 'none',
        },
        spotlight: {
          borderRadius: '14px',
          border: '2px solid oklch(0.55 0.15 220 / 0.3)',
        },
        beacon: {
          display: 'none',
        },
      }}
      locale={{
        back: 'Back',
        close: 'Close',
        last: 'Done',
        next: 'Next →',
        skip: 'Skip tour',
      }}
    />
  );
}
