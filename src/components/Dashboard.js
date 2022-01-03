import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from "react-router-dom";
import { Header } from './common';

export default function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError('');

        try {
            await logout();
            history.pushState('./login');
        } catch {
            setError('Failed to log out');
        }
    }
    return (
        <div>
            <br></br>
            <section>
                <h1 className="text-center mb-1">UC Center</h1>
                <Header />
            </section>
         
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert varaint="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-dark w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
            <hr></hr>
            <h3>What is Ulcerative Colitis?</h3>
            <p>
Ulcerative colitis (UC) is an inflammatory bowel disease. It causes irritation, inflammation, and ulcers in the lining of your large intestine (also called your colon).

There’s no cure, and people usually have symptoms off and on for life. But the right treatments can help you keep a handle on the disease. </p>

<h3> Ulcerative Colitis Causes and Risk Factors </h3> <p>
Ulcerative colitis happens when your immune system makes a mistake. Normally, it attacks invaders in your body, like the common cold. But when you have UC, your immune system thinks food, good gut bacteria, and the cells that line your colon are the intruders. White blood cells that usually protect you attack the lining of your colon instead. They cause the inflammation and ulcers.

Doctors aren’t sure why people get the condition. Your genes may play a role; the disease sometimes runs in families. Other things in the world around you may make a difference, too.

Things that can affect your risk of getting ulcerative colitis include:

Age. It’s most likely if you’re between 15 and 30 years old or older than 60.
Ethnicity. The risk is highest in people of Ashkenazi Jewish descent.
Family history. Your risk could be up to 30% higher if you have a close relative with the condition.
Food and stress don’t cause it, but they can trigger a flare of symptoms.

</p><h3>Types of Ulcerative Colitis</h3><p>
The type of ulcerative colitis you have depends on where it is in your body:

Ulcerative proctitis is usually the mildest form. It’s only in the rectum, the part of your colon closest to your anus. Rectal bleeding may be the only sign of the disease.
Proctosigmoiditis happens in your rectum and the lower end of your colon (you may hear the doctor call it the sigmoid colon). You’ll have bloody diarrhea, belly cramps, and pain. You’ll have the urge to poop, but you won’t be able to. (Your doctor may call this tenesmus.)
Left-sided colitis causes cramps on that side of your belly. You’ll also have bloody diarrhea, and you might lose weight without trying. You’ll have inflammation from your rectum up through the left side of your colon.
Pancolitis often affects your entire colon. It can cause severe bouts of bloody diarrhea, belly cramps, pain, fatigue, and major weight loss.
Acute severe ulcerative colitis is rare. It affects your entire colon and causes severe pain, heavy diarrhea, bleeding, and fever.

</p><h3>Ulcerative Colitis Symptoms</h3><p>
The main symptom of ulcerative colitis is bloody diarrhea. There might be some pus in your stools, too.

Other problems include:

Cramping belly pain
Sudden urges to poop
Not feeling hungry
Weight loss
Feeling tired
Fever
Dehydration
Joint pain or soreness
Canker sores
Eye pain when you look at a bright light
Too few red blood cells, called anemia
Skin sores
Feeling like you haven’t completely emptied your colon after you use the bathroom
Waking up at night to go
Not being able to hold your stool in
Pain or bleeding with bowel movements
Your symptoms can flare up, go away, and come back. You might not have any for weeks or years.

</p><h3>
Ulcerative Colitis vs. Crohn’s Disease vs. Irritable Bowel </h3><p>
Other gut diseases can have some of the same symptoms.

Ulcerative colitis affects only your large intestine and its lining.
Crohn’s disease causes inflammation, but it affects other places in your digestive tract.
Irritable bowel syndrome has some of the same symptoms as UC, but it doesn’t cause inflammation or ulcers. Instead, it’s a problem with the muscles in your intestines.

</p><h3>
Ulcerative Colitis Diagnosis</h3><p>
Your doctor will use tests to tell if you have UC instead of another gut disease.

Blood tests can show if you have anemia or inflammation.
Stool samples can help your doctor rule out an infection or parasite in your colon. They can also show if there’s blood in your stool that you can’t see.
Flexible sigmoidoscopy lets your doctor look at the lower part of your colon. They’ll put a bendable tube into your lower colon through your bottom. The tube has a small light and camera on the end. Your doctor might also use a small tool to take a piece of the lining of your lower colon. This is called a biopsy. A doctor in a lab will look at the sample under a microscope.
Colonoscopy is the same process as flexible sigmoidoscopy, only your doctor will look at your whole colon, not just the lower part.
X-rays are less common for diagnosing the disease, but your doctor may want you to have one in special cases.

</p><h3>
Ulcerative Colitis Treatment</h3><p>
UC treatment has two main goals. The first is to make you feel better and give your colon a chance to heal. The second is to prevent more flare-ups. You may need a combination of diet changes, medication, or surgery to reach those goals.

Diet. Some foods can make your symptoms worse. You might find that soft, bland food doesn’t bother you as much as spicy or high-fiber dishes. If you can’t digest the sugar in milk called lactose (meaning you’re lactose intolerant), your doctor may tell you to stop eating dairy products. A balanced diet with plenty of fiber, lean protein, fruits, and veggies should provide enough vitamins and nutrients.
Medicine. Your doctor may prescribe a few different kinds of drugs, including:
Antibiotics. These fight infections and let your large intestine heal.
Aminosalicylates. These drugs have something called 5-aminosalicylic acid (5-ASA) that fights inflammation and helps control symptoms. You might get pills to swallow or an enema or suppository to put in your bottom.
Corticosteroids. If aminosalicylates don’t work or your symptoms are severe, your doctor might give you these anti-inflammatory drugs for a short time.
Immunomodulators. These help stop your immune system’s attack on your colon. They can take a while to take effect. You might not notice any changes for up to 3 months.
Biologics. These are made from proteins in living cells instead of chemicals. They’re for people with severe ulcerative colitis.
Janus kinase inhibitors (JAK inhibitors). These are oral medicines that can work quickly to get and maintain a remission in ulcerative colitis.
Sphingosine 1-phosphate (S1P) receptor modulators. This is an oral medication for patients with moderately to severely active UC.
Loperamide. This can slow or stop diarrhea. Talk to your doctor before taking it.
Surgery. If other treatments don’t work or your UC is severe, you might need surgery to remove your colon (colectomy) or colon and rectum (proctocolectomy). If you have a proctocolectomy, your doctor might make a small pouch out of your small intestine and attach it to your anus. This is called ileal pouch-anal anastomosis (IPAA). It lets your body expel waste normally, so you don’t need to wear a bag to collect stool.

</p><h3>
Ulcerative Colitis Complications</h3><p>
Complications of ulcerative colitis can include:

Bleeding. This can lead to anemia.
Osteoporosis. Your bones might become weak because of your diet or if you take a lot of corticosteroids.
Dehydration. You might need to get fluids through a vein (intravenous, or IV) if your large intestine can’t absorb enough.
Inflammation. This can affect your joints, skin, or eyes.
Fulminant colitis. If your UC attack is severe, your colon might burst, or infection could spread through your body. Your intestines stop moving waste, and your belly swells.
Megacolon. Fulminant colitis can cause your large intestine to swell or burst. This is a dangerous complication, and you’ll probably need surgery.
Liver disease. Your bile ducts or liver could become inflamed, or you could get scar tissue in your liver.
Colon cancer. Ulcerative colitis puts you at higher risk of getting colon cancer, especially if your whole large intestine is affected or if you’ve had UC for a long time.
Ulcerative Colitis Questions to Ask Your Doctor
Whether you’re worried your symptoms are UC, or you already have the condition and want more information, here are questions to ask your doctor:


</p><h3>
Ulcerative Colitis Prognosis</h3><p>
For most people, ulcerative colitis is a chronic, or long-term, condition. You’ll have flares and periods with no symptoms at all (your doctor will call this remission). A small number of people have one attack and are never troubled again.

A few people, about 10% of those with UC, have their first attack and quickly get worse, with serious complications. In many people, the disease spreads to the large intestine over time. This can turn into colon cancer, but about half the people who get it survive if doctors catch the disease early enough and remove their colon.
 *source: webmd</p>
        
        </div>
    )
}