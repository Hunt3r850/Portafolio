import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EducationSection = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const educationRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const education = t('education.education');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = Array.from({ length: education.length }, () => true);
            setVisibleItems(items);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, [education.length]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'Certificación':
      case 'Certification':
      case 'Zertifizierung':
      case 'Certificazione':
        return Award;
      case 'Título Universitario':
      case 'University Degree':
      case 'Universitätsabschluss':
      case 'Titolo Universitario':
        return GraduationCap;
      default:
        return Award;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Certificación':
      case 'Certification':
      case 'Zertifizierung':
      case 'Certificazione':
        return 'bg-blue-500';
      case 'Título Universitario':
      case 'University Degree':
      case 'Universitätsabschluss':
      case 'Titolo Universitario':
        return 'bg-green-500';
      case 'Curso':
      case 'Course':
      case 'Kurs':
      case 'Corso':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            {t('education.heading')}
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8 rounded-full" />
        </div>

        <div ref={educationRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item: any, index: number) => {
            const IconComponent = getIcon(item.type);
            const typeColor = getTypeColor(item.type);
            
            return (
              <Card
                key={index}
                className={`p-8 hover:shadow-elegant transition-smooth ${
                  visibleItems[index] ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${typeColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h3 className="text-xl font-bold text-accent">{item.title}</h3>
                      <Badge variant="outline" className="w-fit">
                        {item.type}
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        <span className="font-medium">{item.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

