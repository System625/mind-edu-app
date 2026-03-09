'use client';

import React from 'react';
import Hero from '@/components/landing/Hero';
import CoreInsight from '@/components/landing/CoreInsight';
import FeatureShowcase from '@/components/landing/FeatureShowcase';
import DashboardCarousel from '@/components/landing/DashboardCarousel';
import Metrics from '@/components/landing/Metrics';
import MobileView from '@/components/landing/MobileView';
import SecurityPrivacy from '@/components/landing/SecurityPrivacy';
import CTASection from '@/components/landing/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center">
      <Hero />
      <CoreInsight />
      <FeatureShowcase />
      <DashboardCarousel />
      <Metrics />
      <MobileView />
      <SecurityPrivacy />
      <CTASection />
    </main>
  );
}
