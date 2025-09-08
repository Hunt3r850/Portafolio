import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code2, Palette, Smartphone, Database, Globe, Users, Briefcase } from 'lucide-react';


const AboutSection = () => {
  const [skillProgress, setSkillProgress] = useState<number[]>([]);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'UI/UX Design', level: 95, icon: Palette },
    { name: 'Brand Identity', level: 90, icon: Briefcase },
    { name: 'Web Design', level: 88, icon: Globe },
    { name: 'Prototyping', level: 85, icon: Smartphone },
    { name: 'Design Systems', level: 87, icon: Code2 },
    { name: 'Client Relations', level: 92, icon: Users },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Freelance Designer',
      company: 'Independent Practice',
      description: 'Building comprehensive brand identities and digital experiences for diverse clients worldwide.',
    },
    {
      year: '2022',
      title: 'Lead Designer',
      company: 'Creative Studio Co.',
      description: 'Spearheaded major branding projects and mentored junior designers in creative processes.',
    },
    {
      year: '2020',
      title: 'Junior Designer',
      company: 'Design Agency',
      description: 'Focused on digital design and user experience, developing skills in modern design tools.',
    },
    {
      year: '2019',
      title: 'Design Degree',
      company: 'Art & Design University',
      description: 'Graduated with honors, specializing in visual communication and digital design.',
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate skill progress bars
          setTimeout(() => {
            setSkillProgress(skills.map(skill => skill.level));
          }, 300);
        }
      });
    }, observerOptions);

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          const scrollPercent = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
          setTimelineHeight(scrollPercent * 100);
          
          // Show timeline items progressively
          const newVisibleItems = timeline.map((_, index) => {
            return scrollPercent > (index + 1) / (timeline.length + 1);
          });
          setVisibleItems(newVisibleItems);
        }
      });
    }, { threshold: 0 });

    if (skillsRef.current) skillsObserver.observe(skillsRef.current);
    if (timelineRef.current) timelineObserver.observe(timelineRef.current);

    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const scrollPercent = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
          setTimelineHeight(scrollPercent * 100);
          
          const newVisibleItems = timeline.map((_, index) => {
            return scrollPercent > (index + 1) / (timeline.length + 1);
          });
          setVisibleItems(newVisibleItems);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      skillsObserver.disconnect();
      timelineObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const values = [
    {
      icon: Code2,
      title: 'Clean Design',
      description: 'Creating clear, cohesive design systems that scale gracefully.',
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Putting user experience at the heart of every design decision.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing new technologies and pushing creative boundaries.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            About <span className="text-accent-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital experiences that combine beautiful design 
            with powerful functionality. I believe in the perfect balance of creativity and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Personal Story */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-serif font-semibold mb-6">My Journey</h3>
            <div className="space-y-6 text-muted-foreground">
              <p>
                My passion for design started during university when I discovered the magic 
                of bringing ideas to life through visual storytelling. What began as curiosity quickly grew into 
                a deep love for creating meaningful brand experiences.
              </p>
              <p>
                Over the years, I've had the privilege of working with diverse clients, 
                from innovative startups to established brands. Each project has taught me 
                something new and reinforced my belief in the power of thoughtful design and 
                strategic creative thinking.
              </p>
              <p>
                When I'm not designing, you'll find me exploring new creative trends, collaborating with 
                fellow designers, or sharing knowledge with the creative community through 
                workshops and mentoring.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div ref={skillsRef} className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-serif font-semibold mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-accent" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skillProgress[index] || 0} 
                      className="h-2"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>



        {/* Values */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-serif font-semibold mb-8 text-center">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth animate-scale-hover"
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;