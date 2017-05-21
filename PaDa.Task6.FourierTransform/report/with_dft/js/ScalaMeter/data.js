var ScalaMeter = (function(parent) {
  var my = { name: "data" };
  my.index = [{"scope" : ["DFT", "transform"], "name" : "Test-0", "file" : "..\/DFT.transform.Test-0.dsv"}, {"scope" : ["FFT", "transform"], "name" : "Test-1", "file" : "..\/FFT.transform.Test-1.dsv"}, {"scope" : ["Parallel FFT", "transform"], "name" : "Test-2", "file" : "..\/Parallel FFT.transform.Test-2.dsv"}];
  my.tsvData = ['date	param-Input size	value	success	cilo	cihi	units	complete\n2017-05-21T16:17:01Z	1024	249.0851541944445	true	112,856	385,314	ms	"607.104002 264.451075 240.195707 254.050371 509.144069 239.955178 217.178677 197.707981 413.826818 163.389272 171.110703 171.852813 413.573795 158.859408 158.20253 158.269468 432.196174 167.584896 156.393887 176.622759 405.211553 183.406176 172.949245 160.054013 411.133712 169.715285 159.61803 160.099977 429.02335 182.339196 158.135593 164.14834 452.141232 167.791509 160.32444 159.304317"\n2017-05-21T16:17:01Z	128	6.06017288888889	true	4,803	7,317	ms	"7.969544 9.282852 6.402321 4.366537 5.352746 5.337573 7.396115 7.161389 5.240737 7.934291 5.580779 6.500496 6.074775 6.096641 5.381752 5.482604 6.763783 6.438467 5.165322 6.98646 4.883739 6.120293 6.629015 4.605726 6.636601 7.296157 6.101104 7.072586 6.914614 4.434368 5.029216 4.435706 6.466134 5.546418 4.618668 4.460695"\n2017-05-21T16:17:01Z	256	11.956969472222221	true	9,945	13,969	ms	"14.341521 15.479899 16.48842 15.208581 14.942617 13.860912 10.936648 14.208092 11.276243 11.473038 14.35714 12.721641 9.93259 10.371252 10.388656 11.924195 11.106669 12.054499 13.19734 12.963507 9.708127 10.260582 10.165978 10.127154 13.200018 10.817499 12.247278 11.691699 9.770156 9.796484 10.791172 11.649306 11.234742 10.348493 10.809468 10.599285"\n2017-05-21T16:17:01Z	2048	660.2605894166666	true	562,033	758,489	ms	"973.238502 757.981817 731.223443 591.60893 802.483906 598.607438 596.460985 588.876107 749.656612 587.886774 615.878131 719.869999 687.163584 587.634644 595.2936 597.845246 705.767221 619.069697 585.254357 613.052042 762.808882 618.586857 620.238867 622.908323 709.443859 613.036424 607.953658 591.424182 698.219381 603.245294 600.566021 604.620185 867.252353 743.221268 591.409903 609.592727"\n2017-05-21T16:17:01Z	512	37.48471475	true	35,694	39,275	ms	"38.85482 36.069786 36.262119 36.500416 36.881511 35.812747 38.307274 37.023865 37.926625 36.210354 36.135831 36.113965 37.484839 37.988206 39.375145 37.132749 36.654817 36.798509 36.135831 36.517373 41.340422 39.954822 39.857539 38.940946 36.268367 36.012666 37.259483 36.077819 37.834697 37.459849 37.333114 36.756562 36.264797 36.427231 38.094413 43.380222"\n', 'date	param-Input size	value	success	cilo	cihi	units	complete\n2017-05-21T16:17:01Z	1024	41.65081241666666	true	-8,462	91,763	ms	"103.246633 20.009317 13.169227 10.560907 108.543598 19.216781 13.270972 9.645206 110.823925 17.673655 16.176046 10.890238 110.509321 20.817919 8.998146 6.48934 115.078901 19.707654 8.563947 8.982528 104.981646 19.998608 13.255799 7.968206 134.056493 25.196951 13.253568 14.680223 167.112766 27.476833 12.533324 9.88618 110.497718 44.12501 11.43243 30.599231"\n2017-05-21T16:17:01Z	128	1.590328888888889	true	0,181	3,000	ms	"1.588197 1.139272 0.978622 0.90633 1.441381 0.911238 1.480651 1.735905 2.902397 1.386493 1.060731 1.168723 1.642639 1.185234 1.112497 1.100448 1.953674 1.181218 1.203084 1.16203 2.023735 1.641746 1.668968 1.656026 1.519475 0.922841 0.971928 0.939352 2.121464 1.260205 1.209778 1.315093 2.242843 0.856797 0.906776 8.754049"\n2017-05-21T16:17:01Z	256	3.3132679722222225	true	1,322	5,305	ms	"3.115704 2.419111 2.415095 1.549819 4.386619 3.996152 3.866293 2.930511 6.061834 4.102804 4.396436 2.730592 3.55749 2.997448 2.774771 2.42402 4.366092 4.293799 2.998787 3.157651 3.30536 1.629698 1.471726 1.647101 3.134 2.325398 2.434729 2.985846 3.390593 3.142925 3.370958 2.712296 2.577975 12.506102 1.997406 2.104506"\n2017-05-21T16:17:01Z	2048	26.32401308333333	true	12,724	39,924	ms	"20.928589 21.683194 18.491182 18.251547 51.134675 32.543088 26.891356 23.059423 22.123195 17.138603 21.841166 21.396703 20.527412 21.27577 17.554507 20.842017 22.436015 18.674589 20.060636 18.914225 16.782051 18.974915 17.549152 16.638359 24.832813 26.973019 25.78109 23.928268 30.235539 33.670757 24.205834 36.718631 84.432368 37.81774 39.904395 33.451648"\n2017-05-21T16:17:01Z	512	5.741923611111113	true	2,563	8,921	ms	"6.155546 4.360736 5.593273 4.578059 7.020374 6.888731 7.366664 21.862139 4.55887 4.776193 4.523171 4.321913 3.818099 2.90686 4.109945 4.507998 5.803902 4.949783 5.024307 5.240291 5.094368 5.377736 5.323293 4.727998 6.717819 4.794043 4.734692 5.181832 4.553962 5.08589 6.621876 7.7192 5.332218 6.391611 5.227797 5.458061"\n', 'date	param-Input size	value	success	cilo	cihi	units	complete\n2017-05-21T16:17:01Z	1024	49.70464802777777	true	-11,462	110,871	ms	"122.745443 63.223981 12.007197 7.311774 179.759882 31.649699 9.667965 11.003585 149.52479 22.088833 11.791213 10.135633 137.351142 29.772779 12.010321 24.780602 176.966816 34.013921 12.304845 7.8678 159.48237 38.496483 16.186756 12.502532 128.998717 29.433631 10.587236 9.312751 115.502391 24.296869 10.726465 7.601389 111.445549 28.366205 11.604235 8.845529"\n2017-05-21T16:17:01Z	128	1.599365472222222	true	-0,049	3,248	ms	"1.39988 0.992456 1.497162 9.401554 2.122803 1.297243 1.513673 1.171401 1.649779 1.146857 1.054038 1.269576 0.808155 1.048683 1.099109 0.830467 1.143734 1.614079 0.701503 0.772009 3.692703 0.826006 1.087061 0.749696 1.546249 1.497609 1.507872 1.41773 1.484221 1.087507 1.224951 1.08349 4.507998 1.269576 1.030386 1.029941"\n2017-05-21T16:17:01Z	256	4.7174372222222205	true	-4,220	13,654	ms	"19.909358 6.190353 5.527229 8.564393 3.231283 1.793471 3.606131 3.117489 2.524872 2.344588 2.192417 1.601584 2.077285 1.901463 5.114449 1.630144 3.097854 2.45124 3.294649 49.407695 4.002399 2.234364 3.505724 2.454364 3.008158 1.734567 1.543572 1.437366 3.236191 2.595825 1.958583 1.956798 3.059031 2.51684 2.430267 2.575744"\n2017-05-21T16:17:01Z	2048	27.97293694444444	true	-0,927	56,873	ms	"143.53391 64.639927 26.938658 27.375089 92.564793 17.150206 17.640187 14.835964 15.565133 16.541524 20.329277 16.51698 28.348802 16.031463 24.037152 19.668384 79.719095 38.204191 39.79685 15.173327 17.961932 26.509368 20.609967 19.941041 13.499004 14.439696 14.25004 12.798395 17.298361 17.570125 14.550811 15.739616 20.376134 17.7397 14.299127 14.831501"\n2017-05-21T16:17:01Z	512	5.324706472222221	true	0,610	10,040	ms	"4.291122 4.214367 4.316558 5.018506 3.390593 4.239803 4.296477 12.243262 4.848039 2.868482 3.051891 4.260331 4.030959 4.271487 3.391039 2.699801 4.013109 3.946172 8.10922 4.41741 8.801351 4.552623 4.474084 28.677686 5.765079 4.416517 5.090351 3.876557 5.698141 4.565117 4.159925 4.160817 4.370108 3.325441 4.134042 3.702966"\n'];
  parent[my.name] = my;
  return parent;
})(ScalaMeter || {});