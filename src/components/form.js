/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui"
import { darken } from "@theme-ui/color"




export default function App() {
    return (

    <form name="Newsletter" method="POST" netlify="true" action="/confirm">
        <input type="hidden" name="form-name" value="Newsletter" />
        <Themed.p>
            <label
                sx={{
                fontSize: [2, null, null, null, 3],
                
                
            }}
            >
                <input 
                    type="email" 
                    name="email" 
                    placeholder="email@example.com" 
                    required 
                    sx={{
                        lineHeight: [2],
                        borderRadius: [0],
                        width: "300px",
                        height: "48px",
                        fontSize: [2, null, null, null, 3],
                      
                    }}
                />
            </label>
            <Button 
                type="submit" 
                sx={{
                    bg: "#2b6cb0",
                    fontSize: [2, null, null, null, 3],
                    borderRadius: [0],
                    marginTop: [2],
                    
                    transition: "all 0.3s ease-in-out",
                    ":hover": {
                        bg: darken("#2b6cb0", 0.08),
                    },
                }}
                >
                    Start growing!
            </Button>
                <Themed.p
                sx={{
                    fontSize: [1],
                    marginTop: [1],
                }}
                >
                Powered by Substack. <a 
                sx={{
                    color: "primary",
                }}
                target="_blank" rel="nofollow noopener noreferrer" href="https://substack.com/privacy">Privacy Policy</a>. 
                </Themed.p>
            </Themed.p>
    </form>

    );
}
