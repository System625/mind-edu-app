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
          primaryColor: 'hsl(262 80% 60%)',
          backgroundColor: 'hsl(224 71% 4%)',
          textColor: 'hsl(213 31% 91%)',
          arrowColor: 'hsl(224 71% 4%)',
          overlayColor: 'rgba(0, 0, 0, 0.65)',
          zIndex: 10000,
        },
        tooltipContainer: {
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(24px)',
        },
        tooltip: {
          borderRadius: '16px',
          padding: '20px 24px',
        },
        tooltipTitle: {
          fontSize: '16px',
          fontWeight: 700,
          marginBottom: '8px',
        },
        tooltipContent: {
          fontSize: '14px',
          lineHeight: '1.6',
          padding: '0',
        },
        tooltipFooter: {
          marginTop: '16px',
        },
        buttonNext: {
          backgroundColor: 'hsl(262 80% 60%)',
          borderRadius: '999px',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '8px 20px',
        },
        buttonBack: {
          color: 'hsl(213 31% 91% / 0.6)',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginRight: '8px',
        },
        buttonSkip: {
          color: 'hsl(213 31% 91% / 0.4)',
          fontSize: '12px',
          fontWeight: 600,
        },
        spotlight: {
          borderRadius: '12px',
        },
      }}
      locale={{
        back: 'Back',
        close: 'Close',
        last: 'Done',
        next: 'Next',
        skip: 'Skip tour',
      }}
    />
  );
}
