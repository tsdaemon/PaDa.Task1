﻿ using System;
using System.IO;
 using PaDa.Lib;

namespace PaDa.Task1
{
    class Program
    {
        static void Main(string[] args)
        {
            var tester = new ArrayAlgorithmTester(100000, 5, new ArrayGenerator());

            var result = tester.Test(new PrefixScanSequential());

            using (var sw = new StreamWriter(File.OpenWrite("sequential.csv")))
            {
                foreach (var s in result)
                {
                    sw.Write($"{s.Item1}, {s.Item2.TotalMilliseconds}\n");
                }
            }

            var result2 = tester.Test(new PrefixScanParallel());

            using (var sw = new StreamWriter(File.OpenWrite("parallel.csv")))
            {
                foreach (var s in result2)
                {
                    sw.Write($"{s.Item1}, {s.Item2.TotalMilliseconds}\n");
                }
            }
        }
    }
}