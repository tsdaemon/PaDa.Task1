package org.ucu.PaDa.Task6.FT
import org.ucu.PaDa.Task6._
/**
  * Created by Anatoliy on 15.05.2017.
  */
class FFT extends DFT {
  override def transform(in:Array[Complex]):Array[Complex] = {
    val N = in.length
    //println(N)

    if(N==1) in
    else {
      val (even, odd) = getEvenOdd(in)

      ((0 to N/2-1).map(j => even(j) + odd(j)*Complex.create(1, -(2*Math.PI*j)/N)) ++
        (0 to N/2-1).map(j => even(j) - odd(j)*Complex.create(1, -(2*Math.PI*j)/N))).toArray
    }
  }

  override def transformDouble(in:Array[Double]):Array[Complex] = {
    transform(doubleAsComplex(in))
  }

  def getEvenOdd(in:Array[Complex]) = {
    val N = in.length

    (transform((0 to N/2-1).map(2*_).map(in(_)).toArray),
      transform((0 to N/2-1).map(2*_+1).map(in(_)).toArray))
  }
}