function showNameModal() {

    var modalBackdrop = document.getElementById('empty-space');
    var nameModal = document.getElementById('login-modal');

    // Show the modal and its backdrop.
    modalBackdrop.classList.remove('hidden');
    nameModal.classList.remove('hidden');

}

function closeNameModal() {

    var modalBackdrop = document.getElementById('empty-space');
    var nameModal = document.getElementById('login-modal');

    // Show the modal and its backdrop.
    modalBackdrop.classList.add('hidden');
    nameModal.classList.add('hidden');

}

window.addEventListener('DOMContentLoaded', function () {
    var nameArr = [Emma, Liam, Olivia, Noah, Ava, Mason, Sophia, Lucas, Isabella, Oliver, Mia, Ethan, Amelia, Elijah, Charlotte, Logan, Harper, Aiden, Aria, James, Ella, Benjamin, Abigail, Jackson, Evelyn, Carter, Avery, Jacob, Emily, Sebastian, Madison, Alexander, Scarlett, Michael, Sofia, Matthew, Mila, Luke, Riley, Jack, Lily, Jayden, Chloe, Wyatt, Layla, Daniel, Ellie, Gabriel, Grace, William, Zoey, Grayson, Aubrey, Henry, Elizabeth, Owen, Penelope, Jaxon, Hannah, Levi, Victoria, Ryan, Nora, Julian, Stella, Lincoln, Luna, Isaiah, Addison, David, Lillian, Adam, Skylar, Josiah, Natalie, Joseph, Maya, Samuel, Paisley, Eli, Savannah, Isaac, Hazel, Nathan, Lucy, John, Bella, Caleb, Camila, Andrew, Brooklyn, Leo, Audrey, Dylan, Aaliyah, Joshua, Aurora, Muhammad, Leah, Anthony, Zoe, Hunter, Elena, Connor, Anna, Christian, Violet, Asher, Claire, Adrian, Eva, Aaron, Kennedy, Landon, Eleanor, Christopher, Hailey, Mateo, Kinsley, Cameron, Sophie, Brayden, Emilia, Easton, Maria, Jeremiah, Alice, Ezra, Madelyn, Jordan, Aubree, Hudson, Gabriella, Greyson, Adeline, Jace, Sarah, Thomas, Ariana, Nolan, Serenity, Max, Arianna, Bryson, Sadie, Nicholas, Eliana, Charlie, Clara, Dominic, Isabelle, Evan, Peyton, Xavier, Caroline, Jaxson, Piper, Colton, Julia, Austin, Kaylee, Carson, Naomi, Ayden, Gianna, Kayden, Willow, Gavin, Reagan, Elias, Autumn, Maverick, Rylee, Cooper, Nevaeh, Jonathan, Quinn, Chase, Valentina, Ezekiel, Everly, Kai, Alexa, Luca, Samantha, Bentley, Mackenzie, Santiago, Brielle, Alex, Ruby, Parker, Isla, Tyler, Madeline, Robert, Cora, Roman, Taylor, Tristan, Emery, Ian, Ivy, King, Nova, Jason, Delilah, Micah, Melanie, Miles, Athena, Harrison, Lydia, Theodore, Natalia, Jameson, Leilani, Zachary, Arya, Declan, Jade, Leonardo, Kylie, Sawyer, Allison, Ryder, Charlie, Damian, Lilly, Finn, Bailey, Vincent, Nur, Braxton, Annabelle, Cole, Faith, Maddox, Adalyn, Silas, Norah, Everett, Hadley, Jude, Laila, Weston, Alyssa, Kaiden, Sara, Ali, Liliana, Jayce, Genesis, Blake, Adalynn, Theo, Alexis, Charles, Alexandra, George, Raelynn, Nathaniel, Jasmine, Matteo, Princess, Xander, Vivian, Wesley, Kayla, Ashton, Ariel, Emmett, Isabel, Eric, Eden, Kingston, Lyla, Ryker, Jordyn, Axel, Lauren, Giovanni, Payton, Camden, London, Omar, Melody, Abel, Ana, Brandon, Katherine, Amir, Arabella, Bennett, Iris, Avery, Mya, Elliott, Ryleigh, Rowan, Teagan, Hayden, Alina, Jax, Aliyah, Angel, Rose, Calvin, Trinity, Brantley, Adaline, Zayden, Morgan, Mohammed, Gracie, Bryce, Josie, Ivan, Khloe, Justin, Eliza, Karter, Callie, Lorenzo, Zara, Elliot, Finley, Kevin, Brianna, Maxwell, Alaina, Brody, Londyn, Zane, Maggie, Diego, Sydney, Zion, Anastasia, Antonio, Juliana, Jose, Paige, Beau, Elise, Jonah, Mckenzie, Malachi, Presley, Aidan, Adriana, Marcus, Harley, Dawson, Amara, Luis, Amaya, Carlos, Harmony, Prince, Emerson, Kaleb, Freya, Miguel, Jocelyn, Ben, Mary, Dean, Abby, Enzo, Molly, Lukas, Sienna, Tucker, Cecilia, Sam, Kendall, Aj, Josephine, Caden, Laura, Kaden, Marley, Grant, Maryam, Paxton, Summer, Patrick, Nina, Stephen, Andrea, Messiah, Ayla, Riley, Evie, Sean, Angel, Waylon, Eloise, Jake];
    var name = "Anonymous";
    var checkInButton = document.getElementById('check-in-button');
    checkInButton.addEventListener('click', showNameModal);


});