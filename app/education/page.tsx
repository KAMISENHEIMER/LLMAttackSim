import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Code, Download, ExternalLink, Lightbulb, Shield } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function EducationPage() {
  return (
    <Layout backButton={{ href: '/', label: 'Back to Home' }}>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Educational Resources</h1>
          <p className="text-muted-foreground mt-2">Comprehensive materials on LLM safety, vulnerabilities, and best practices</p>
        </div>

        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="technical">Technical Resources</TabsTrigger>
            <TabsTrigger value="research">Research Papers</TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="space-y-4 mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Introduction to LLM Safety',
                  description: 'A beginner-friendly guide to understanding the importance of safety in language models',
                  icon: <BookOpen className="h-6 w-6" />,
                  path: '/education/guides/introduction',
                },
                {
                  title: 'Multi-turn Interaction Risks',
                  description: 'Understanding how vulnerabilities can emerge across multiple turns of conversation',
                  icon: <Shield className="h-6 w-6" />,
                  path: '/education/guides/multi-turn-risks',
                },
                {
                  title: 'Best Practices for Developers',
                  description: 'Practical guidelines for implementing safe LLM applications',
                  icon: <Code className="h-6 w-6" />,
                  path: '/education/guides/best-practices-dev',
                },
                {
                  title: 'Ethical Considerations in AI Safety',
                  description: 'Exploring the ethical dimensions of AI safety research and implementation',
                  icon: <Lightbulb className="h-6 w-6" />,
                  path: '/education/guides/ethical-considerations',
                },
                {
                  title: 'Safety Mechanisms Explained',
                  description: 'A detailed look at the various safety mechanisms implemented in modern LLMs',
                  icon: <Shield className="h-6 w-6" />,
                  path: '/education/guides/safety-mechanisms',
                },
                {
                  title: 'Future of LLM Safety',
                  description: 'Emerging trends and approaches in LLM safety research',
                  icon: <Lightbulb className="h-6 w-6" />,
                  path: '/education/guides/future-safety',
                },
              ].map((resource, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="text-primary mb-2">{resource.icon}</div>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={resource.path}>Read Guide</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technical" className="space-y-4 mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'LLM Architecture and Safety',
                  description: 'Technical deep dive into how language model architecture affects safety properties',
                  icon: <Code className="h-6 w-6" />,
                },
                {
                  title: 'Prompt Engineering for Safety',
                  description: 'Advanced techniques for designing prompts that enhance safety',
                  icon: <Code className="h-6 w-6" />,
                },
                {
                  title: 'Implementing RLHF',
                  description: 'Technical guide to implementing Reinforcement Learning from Human Feedback',
                  icon: <Code className="h-6 w-6" />,
                },
                {
                  title: 'Safety Monitoring Systems',
                  description: 'Building systems to monitor and detect potential safety issues in LLM applications',
                  icon: <Shield className="h-6 w-6" />,
                },
                {
                  title: 'Red Teaming Methodologies',
                  description: 'Systematic approaches to testing LLM safety through adversarial techniques',
                  icon: <Shield className="h-6 w-6" />,
                },
                {
                  title: 'Multi-turn Safety Evaluation',
                  description: 'Methods for evaluating LLM safety across complex multi-turn interactions',
                  icon: <Shield className="h-6 w-6" />,
                },
              ].map((resource, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="text-primary mb-2">{resource.icon}</div>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/education/technical">View Resource</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research" className="space-y-4 mt-6">
            <div className="grid gap-6">
              {[
                {
                  title: 'Multi-turn Jailbreaking of LLMs',
                  authors: 'Smith et al., 2023',
                  abstract: "This paper explores the vulnerabilities of language models to multi-turn interaction patterns that gradually shift the model's behavior.",
                  link: '#',
                },
                {
                  title: 'Robust Safety Mechanisms for Conversational AI',
                  authors: 'Johnson et al., 2023',
                  abstract: 'A comprehensive analysis of safety mechanisms designed to maintain consistent behavior across complex multi-turn interactions.',
                  link: '#',
                },
                {
                  title: 'Context Manipulation in Large Language Models',
                  authors: 'Garcia et al., 2024',
                  abstract: 'This study examines how context can be manipulated across multiple turns to influence language model outputs.',
                  link: '#',
                },
                {
                  title: 'Instruction Persistence in LLMs',
                  authors: 'Williams et al., 2024',
                  abstract: 'An investigation into how language models maintain or lose adherence to initial instructions across extended conversations.',
                  link: '#',
                },
                {
                  title: 'Evaluating Multi-turn Safety in Commercial LLMs',
                  authors: 'Chen et al., 2024',
                  abstract: 'A comparative study of how different commercial language models respond to potential multi-turn manipulation attempts.',
                  link: '#',
                },
              ].map((paper, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{paper.title}</CardTitle>
                    <CardDescription>{paper.authors}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{paper.abstract}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/education/papers/paper1.pdf" download>
                        <Download className="h-4 w-4 mr-2" /> PDF
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/education/citations/paper1">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Citation
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-4 mt-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: 'LLM Safety Fundamentals',
                  description: 'A comprehensive introduction to the principles and practices of LLM safety',
                  duration: '4 weeks',
                  level: 'Beginner',
                  topics: ['Safety basics', 'Alignment', 'Evaluation methods', 'Practical implementation'],
                },
                {
                  title: 'Advanced LLM Safety Engineering',
                  description: 'Deep technical course on implementing robust safety measures in LLM applications',
                  duration: '6 weeks',
                  level: 'Advanced',
                  topics: ['Safety architecture', 'Red teaming', 'Monitoring systems', 'Safety fine-tuning'],
                },
                {
                  title: 'Multi-turn Interaction Safety',
                  description: 'Specialized course focusing on safety in complex conversational contexts',
                  duration: '3 weeks',
                  level: 'Intermediate',
                  topics: ['Conversation modeling', 'Context management', 'Goal consistency', 'Instruction persistence'],
                },
                {
                  title: 'Ethical Dimensions of AI Safety',
                  description: 'Exploring the ethical considerations and implications of AI safety research',
                  duration: '4 weeks',
                  level: 'All levels',
                  topics: ['Ethical frameworks', 'Responsible disclosure', 'Societal impacts', 'Policy considerations'],
                },
              ].map((course, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 mb-4">
                      <div className="bg-muted rounded-md px-2 py-1 text-xs">Duration: {course.duration}</div>
                      <div className="bg-muted rounded-md px-2 py-1 text-xs">Level: {course.level}</div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Topics covered:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        {course.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4">
                    <Button className="w-full">Enroll in Course</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-6 rounded-lg mt-6"></div>
      </div>
    </Layout>
  );
}
