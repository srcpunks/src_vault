import "./App.css";
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@srcpunks/src_ui";

function App() {
  return (
    <main className="container">
        <div className="w-fit">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Tab1 Title</TabsTrigger>
                    <TabsTrigger value="password">Tab2 Title</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    Tab1 Content
                </TabsContent>
                <TabsContent value="password">
                    Tab2 Content
                </TabsContent>
            </Tabs>
            <Button>Hello, world</Button>
        </div>
    </main>
  );
}

export default App;
