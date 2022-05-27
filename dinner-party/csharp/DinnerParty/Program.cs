using System;
using System.Collections.Generic;

namespace DinnerParty
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Guest> tableOne = new List<Guest>();

            List<Guest> tableTwo = new List<Guest>();

            List<Guest> guestList = new List<Guest>();

            Guest marilyn = new Guest("Marilyn Monroe", "entertainer", "(1926 - 1962) American actress, singer, model");

            Guest abraham = new Guest("Abraham Lincoln", "politician", "(1809 - 1865) US President during American civil war");

            Guest martin = new Guest("Martin Luther King", "activist", "(1929 - 1968)  American civil rights campaigner");

            Guest rosa = new Guest("Rosa Parks", "activist", "(1913 - 2005)  American civil rights activist");

            Guest peter = new Guest("Peter Sellers", "entertainer", "(1925 - 1980) British actor and comedian");

            Guest alan = new Guest("Alan Turing", "computer scientist", "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world");

            Guest grace = new Guest("Admiral Grace Hopper", "computer scientist", "(1906–1992) - developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds");

            Guest gandhi = new Guest("Indira Gandhi", "politician", "(1917 - 1984) Prime Minister of India 1966 - 1977");

            guestList.Add(marilyn);
            guestList.Add(abraham);
            guestList.Add(martin);
            guestList.Add(rosa);
            guestList.Add(peter);
            guestList.Add(alan);
            guestList.Add(grace);
            guestList.Add(gandhi);


            List<string> tableOneOccupations = new List<string>();

            foreach(Guest guest in guestList)
            {
                if (!tableOneOccupations.Contains(guest.Occupation))
                {
                    tableOneOccupations.Add(guest.Occupation);
                    tableOne.Add(guest);
                }
                else
                {
                    tableTwo.Add(guest);
                }
            }


            Console.WriteLine("Table 1");
            Console.WriteLine("-------");
            foreach (Guest person in tableOne)
            {
            Console.WriteLine($"{person.Name} ({person.Occupation}) {person.Bio}");
            }
        
            Console.WriteLine("Table 2");
            Console.WriteLine("-------");
            foreach (Guest person in tableTwo)
            {
                Console.WriteLine($"{person.Name} ({person.Occupation}) {person.Bio}");
            }

        }
    }
}
