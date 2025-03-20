import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, ArrowLeft, Shield, Info, Settings, History } from 'lucide-react';
import { SimulatorInterfaceInteractive } from '@/components/simulator-interface-interactive';
import { ApiModeSelector } from '@/components/api-mode-selector';
import { AttackSequenceManager } from '@/components/attack-sequence-manager';
import { scenarios } from '@/lib/simulator-api';

export default function SimulatorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-primary">
            <Shield className="h-6 w-6" />
            <span className="font-bold text-lg">LLM Safety Simulator</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-10">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Multi-turn Attack Simulator</h1>
            <p className="text-muted-foreground mt-2">Explore different attack scenarios based on the "Derail Yourself: Multi-Turn LLM Jailbreak" research paper</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md p-4 flex items-start gap-3 dark:bg-yellow-900/30 dark:border-yellow-800 dark:text-yellow-200">
            <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-medium">Educational Purpose Notice</h3>
              <p className="text-sm mt-1">
                This simulator is designed for educational purposes only, to help researchers and developers understand potential vulnerabilities in LLM systems and develop better
                safety measures. The scenarios presented are based on academic research and are simplified for educational clarity.
              </p>
            </div>
          </div>

          <Tabs defaultValue="simulator" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="simulator">Attack Simulator</TabsTrigger>
              <TabsTrigger value="settings">API Settings</TabsTrigger>
              <TabsTrigger value="sequences">Saved Sequences</TabsTrigger>
            </TabsList>

            <TabsContent value="simulator" className="mt-4">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Multi-turn Attack Simulator</CardTitle>
                  <CardDescription>Select a scenario to explore different multi-turn attack techniques and understand their safety implications</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="scenario1" className="w-full">
                    <TabsList className="grid w-full grid-cols-5">
                      <TabsTrigger value="scenario1">Goal Hijacking</TabsTrigger>
                      <TabsTrigger value="scenario2">Refusal Suppression</TabsTrigger>
                      <TabsTrigger value="scenario3">Context Manipulation</TabsTrigger>
                      <TabsTrigger value="scenario4">Persona Exploitation</TabsTrigger>
                      <TabsTrigger value="scenario5">Instruction Injection</TabsTrigger>
                    </TabsList>
                    <TabsContent value="scenario1">
                      <SimulatorInterfaceInteractive scenario={scenarios[0]} />
                    </TabsContent>
                    <TabsContent value="scenario2">
                      <SimulatorInterfaceInteractive scenario={scenarios[1]} />
                    </TabsContent>
                    <TabsContent value="scenario3">
                      <SimulatorInterfaceInteractive scenario={scenarios[2]} />
                    </TabsContent>
                    <TabsContent value="scenario4">
                      <SimulatorInterfaceInteractive scenario={scenarios[3]} />
                    </TabsContent>
                    <TabsContent value="scenario5">
                      <SimulatorInterfaceInteractive scenario={scenarios[4]} />
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    This simulator is for educational purposes only
                  </div>
                  <Button variant="outline" size="sm">
                    View Safety Guidelines
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                <ApiModeSelector />

                <Card>
                  <CardHeader>
                    <CardTitle>About API Modes</CardTitle>
                    <CardDescription>Understanding the different API modes available in the simulator</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2 text-primary">
                        <Settings className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Mock API Mode</h3>
                        <p className="text-sm text-muted-foreground">
                          Uses pre-defined responses for controlled testing. This mode allows you to explore attack scenarios without making actual API calls, ensuring consistent
                          and predictable behavior for educational purposes.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2 text-primary">
                        <Settings className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">OpenAI API Mode</h3>
                        <p className="text-sm text-muted-foreground">
                          Connects to the OpenAI API for live testing with actual model responses. This mode allows you to test attack scenarios against real models to evaluate
                          their current safety measures and responses.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-muted rounded-md">
                      <h4 className="text-sm font-medium mb-2">Important Notes:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Your API key is only stored in memory and is never persisted or sent to our servers</li>
                        <li>When using the OpenAI API, standard API usage charges from OpenAI will apply</li>
                        <li>The mock API provides consistent responses for educational purposes</li>
                        <li>Real model responses may vary as models are updated and improved</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sequences" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                <AttackSequenceManager />

                <Card>
                  <CardHeader>
                    <CardTitle>About Attack Sequences</CardTitle>
                    <CardDescription>Understanding how to use saved attack sequences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2 text-primary">
                        <History className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">What are Attack Sequences?</h3>
                        <p className="text-sm text-muted-foreground">
                          Attack sequences are saved conversations that demonstrate specific vulnerability patterns. They can be replayed, exported, and shared for educational and
                          research purposes.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2 text-primary">
                        <Info className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Why Save Sequences?</h3>
                        <p className="text-sm text-muted-foreground">Saving sequences allows you to:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                          <li>Document successful attack patterns for research</li>
                          <li>Test if model updates have addressed vulnerabilities</li>
                          <li>Share findings with other researchers</li>
                          <li>Compare effectiveness across different models</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-muted rounded-md">
                      <h4 className="text-sm font-medium mb-2">Educational Purpose Reminder:</h4>
                      <p className="text-sm text-muted-foreground">
                        Remember that all attack sequences should be used responsibly and for educational purposes only. The goal is to improve AI safety by understanding
                        vulnerabilities, not to exploit them in production systems.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-muted p-6 rounded-lg mt-6">
            <h2 className="text-xl font-bold mb-4">Understanding Multi-turn Attacks</h2>
            <p className="text-muted-foreground mb-4">
              Multi-turn attacks attempt to manipulate language models through a series of carefully crafted messages that gradually shift the conversation toward harmful content.
              Unlike single-turn jailbreaks, these attacks are more subtle and can potentially bypass safety measures by exploiting the model's conversation history handling.
            </p>
            <div className="grid gap-4 md:grid-cols-2 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">For Researchers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Identify sophisticated vulnerability patterns</li>
                    <li>Understand multi-turn interaction dynamics</li>
                    <li>Develop more effective safety measures</li>
                    <li>Study how safety mechanisms respond to sequential manipulation attempts</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">For Developers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Learn best practices for LLM implementation</li>
                    <li>Understand the importance of conversation history management</li>
                    <li>Implement more robust safety features</li>
                    <li>Test systems against sophisticated manipulation patterns</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">© {new Date().getFullYear()} LLM Safety Simulator. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
