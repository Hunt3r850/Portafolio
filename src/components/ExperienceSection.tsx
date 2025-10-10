import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const experienceRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const experiences = t('experience.jobs');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = Array.from({ length: experiences.length }, () => true);
            setVisibleItems(items);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, [experiences.length]);

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            {t('experience.heading')}
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8 rounded-full" />
        </div>

        <div ref={experienceRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-accent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((job: any, index: number) => (
              <Card
                key={index}
                className={`relative p-8 ml-0 md:ml-20 hover:shadow-elegant transition-smooth ${
                  visibleItems[index] ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 top-8 w-6 h-6 bg-gradient-accent rounded-full border-4 border-background hidden md:block" />

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                      <h3 className="text-2xl font-bold text-accent">{job.title}</h3>
                      <Badge variant="secondary" className="w-fit">
                        {job.period}
                      </Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

