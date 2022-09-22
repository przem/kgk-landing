import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MainSlider from "../components/MainSlider";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimony from "../components/Testimony";
import LastBlogEntries from "../components/LastBlogEntries";
import ContactUs from "../components/ContactUs";

const PolitykaPrywatnosci = () => (
  <Layout spa={false}>
    <Seo title="Polityka prywatności" />
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-16">
        <h1 className="text-lg text-kgk-gold uppercase py-8 font-regular">Polityka Prywatności</h1>
        <div className=" prose">
            <h2>Polityka ochrony danych osobowych</h2>

            <p>Ochrona danych osobowych stanowi dla Kancelarii najwyższy priorytet. Poniżej zawarte są informacje dotyczące postępowania z danymi osobowymi oraz stosowania plików cookies.</p>

            <h3>Administrator danych osobowych:</h3>
            <blockquote>
            Katarzyna Gumula-Kubicka Kancelaria Adwokacka,<br/>
            ul. Dominikanów 32/67, 31-409 Kraków, (dalej Kancelaria)<br/>
            <br/>
            Dane kontaktowe:<br/>
            E-mail: kancelaria@gumula-kubicka.pl<br/>
            tel.: 609 610 013
            </blockquote>

            <p>Powyższe dane są właściwe do kontaktu we wszelkich sprawach związanych z przetwarzaniem Twoich danych osobowych</p>

            <h3>Źródło danych osobowych:</h3>
            <p>Dane osobowe mogą pochodzić zarówno ze źródła pierwotnego (od Ciebie samego), jak również ze źródła wtórnego (od podmiotu trzeciego, np. naszego Klienta, z ogólnodostępnych baz danych czy rejestrów). Swoje dane osobowe podałeś nam:</p>
            <ul>
                <li>w ramach prowadzonej z nami korespondencji,</li>
                <li>w związku z realizacją usług i zapytań ofertowych.</li>
            </ul>

            <p>W ramach zawartych umów z naszymi Klientami, w tym związanych ze świadczenia pomocy prawnej uzyskujemy Twoje dane osobowe także w sposób pośredni. Staramy się przetwarzać jedynie Twoje zwykłe dane osobowe. W przypadku przekazania nam szczególnych kategorii danych osobowych lub dotyczące wyroków skazujących i innych naruszeń prawa, o ile ich przetwarzanie nie będzie bezwzględnie koniecznie zgodnie z obowiązującymi przepisami prawa, niezwłocznie je usuniemy.Dane osobowe pozyskujemy również z ogólnodostępnych baz danych, rejestrów (tzw. źródła publiczne).</p>

            <h3>Cele i podstawa prawna przetwarzania Twoich danych osobowych:</h3>

            <p>Przetwarzamy Twoje dane osobowe, bo jest to niezbędne do zawarcia, a następnie wykonania umowy zawartej z Tobą albo administratorem lub podmiotem przetwarzającym Twoje dane osobowe – w tym do:</p>
            <ul>
                <li>świadczenia pomocy prawnej, w tym występowania w imieniu naszego Klienta przed urzędami i sądami,</li>
                <li>udzielaniu porad prawnych, opracowanie projektów aktów prawnych,</li>
                <li>wykonywania i zapewnienia obsługi umowy,</li>
                <li>kontaktowania się z Tobą w związku z wykonywaniem zawartej umowy,</li>
                <li>kontaktowanie się z Tobą w związku z realizacją stosunku pełnomocnictwa,</li>
                <li>utrzymywanie bieżących relacji zawodowych, współpracy zawodowej.</li>
            </ul>

            <p>Przetwarzamy też Twoje dane osobowe w celach wskazanych poniżej, na podstawie prawnie uzasadnionego interesu administratora danych lub procesora, którym jest:</p>
            <ul>
                <li>podejmowanie działań związanych z przeciwdziałaniem praniu pieniędzy oraz finansowaniu terroryzmowi,</li>
                <li>windykacja należności,</li>
                <li>prowadzenie postępowań sądowych, administracyjnych, arbitrażowych, mediacyjnych i innych,</li>
                <li>przechowywanie danych dla celów archiwalnych oraz zapewnienie rozliczalności (wykazania spełnienia przez Kancelarię obowiązków wynikających z przepisów prawa),</li>
                <li>spełnienie wymogów wynikających z przepisów podatkowych i o rachunkowości, w tym prowadzenie dokumentacji podatkowej oraz przechowywania dowodów księgowości,</li>
                <li>spełnienie wymogów wynikających z innej sprawozdawczości.</li>
            </ul>

            <h3>Na podstawie zgody:</h3>

            <p>przetwarzamy Twoje dane osobowe w celach:</p>
            <ul>
                <li>związanych z rekrutacją,</li>
                <li>przekazywania informacji prawnych i innych związanych z działalnością Kancelarii</li>

            </ul>

            <h3>Obowiązek podania danych osobowych:</h3>

            <p>W zależności od nawiązanej relacji z Kancelarią wymagamy podania przez Ciebie imienia i nazwiska,adresu e-mail, jeżeli jest to wystarczające do załatwienia Twojej sprawy. W celu zawarcia i/lub wykonania zawartej z Tobą umowy bądź stosunku pełnomocnictwa możemy również prosić Cię o podanie nr telefonu, PESEL/NIP oraz adresu do korespondencji czy adresu prowadzenia działalności gospodarczej. Jeżeli wymagają tego przepisy prawa, możemy wymagać od Ciebie podania innych danych niezbędnych np.: ze względów rachunkowych lub podatkowych, na potrzeby procesu rekrutacji.</p>

            <p>Jeśli z jakiegoś powodu nie podasz tych danych osobowych, niestety nie będziemy mogli nawiązać z Tobą żadnych relacji, w tym biznesowych. W pozostałym zakresie podanie Twoich danych jest dobrowolne. Jeżeli jednak nie podasz tych danych lub w jakikolwiek sposób uniemożliwisz nam ich przetwarzanie może to skutkować zaprzestaniem świadczenia usług i/lub rozwiązaniem umowy,względnie niezałatwieniem sprawy, z którą się zwracasz do Kancelarii.</p>

            <h3>Cofnięcie zgody:</h3>
            <p>Jeżeli przetwarzamy Twoje dane osobowe na podstawie zgody, masz prawo w każdym czasie ją cofnąć przesyłając w drodze e-mail, telefonicznie lub pisemnie informację o jej cofnięciu. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem. Wycofanie zgody może skutkować zaprzestaniem świadczenia usługi i/lub rozwiązaniem umowy, względnie niezałatwieniem sprawy, z którą się zwracasz do Kancelarii.</p>

            <h3>Uprawnienia w zakresie przetwarzanych danych:</h3>
            <p>Przysługuje Ci prawo dostępu do Twoich danych osobowych, w tym uzyskania kopii danych.Dodatkowo jeśli uznasz, że Twoje dane osobowe przetwarzane przez Kancelarię są niezgodne z rzeczywistością, masz prawo do ich sprostowania lub uzupełnienia. Masz prawo: żądania usunięcia Twoich danych osobowych w przypadkach przewidzianych prawem, wniesienia żądania ograniczenia przetwarzania Twoich danych osobowych, wniesienia sprzeciwu wobec przetwarzania Twoich danych osobowych w przypadku przetwarzania ich w celu realizacji uzasadnionego interesu Kancelarii, do otrzymania od Kancelarii Twoich danych osobowych w ustrukturyzowanym formacie oraz przenoszenia danych osobowych do innego administratora. W przypadku przeniesienia danych, z uwagi na inne przepisy prawa, może być wymagane uzyskanie zgody Twojej lub innej osoby lub spełnienie innych warunków wymaganych tymi przepisami, aby nie podlegać decyzji opierającej się wyłącznie na zautomatyzowanym przetwarzaniu, w tym profilowaniu, które wywołuje wobec Ciebie skutki prawne lub w inny sposób istotnie na Ciebie wpływa, chyba, że decyzja ta jest niezbędna do realizacji umowy, jest dozwolona prawem lub wyraziłeś wcześniej na to wyraźną zgodę. W przypadkach, w których przetwarzanie danych odbywa się na podstawie udzielonej zgody, przysługuje Ci prawo do cofnięcia udzielonych zgód na poszczególne cele przetwarzania, w dowolnym momencie.Zgodę możesz wycofać za pośrednictwem poczty elektronicznej: kancelaria@gumula-kubicka.pl lub wysyłając do nas cofnięcie zgody za pośrednictwem usług pocztowych na adres siedziby Kancelarii.Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania, realizowanego do czasu wycofania zgody. Pamiętaj, że w przypadku zawarcia umowy lub transakcji podanie danych osobowych jest konieczne do ich realizacji. Pamiętaj, że na podstawie art. 14 ust. 5 RODO Kancelaria zwolniona jest z obowiązku informacyjnego w przypadku pozyskiwania danych osobowych w sposób inny niż od osoby, której dane dotyczą, w zakresie w jakim dane osobowe muszą zostać poufne zgodnie z obowiązkiem zachowania tajemnicy zawodowej (radcowskiej), w tym ustawowy m obowiązkiem zachowania tajemnicy (np. dane osobowe innych stron postępowania sądowego lub administracyjnego, świadków, pełnomocników, biegłych).</p>

            <h3>Skarga w związku z przetwarzaniem danych osobowych:</h3>
            <p>W przypadkach uznania, iż przetwarzanie przez Kancelarię Twoich danych osobowych narusza przepisy Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 przysługuje Ci prawo do wniesienia skargi do organu nadzorczego. Od 25 maja 2018 r. będzie to Prezes Urzędu Ochrony Danych Osobowych. Sprzeciw w związku z przetwarzaniem danych osobowych Masz prawo wnieść sprzeciw wobec przetwarzania Twoich danych osobowych, gdy ich przetwarzanie odbywa się na podstawie prawnie uzasadnionego interesu lub dla celów statystycznych, a sprzeciw jest uzasadniony przez szczególną sytuację, w której się znalazłaś/eś.</p>

            <h3>Odbiorcy danych osobowych:</h3>
            <p>Odbiorcami Twoich danych osobowych mogą być:</p>
            <ul>
                <li>organy publiczne,</li>
                <li>instytucje lub podmioty trzecie uprawnione do żądania dostępu lub otrzymania danych osobowych na podstawie przepisów prawa,</li>
                <li>podmioty, którym Kancelaria powierzyła przetwarzanie danych osobowych na podstawie zawartych umów (dostawcy i podwykonawcy), np. doradcy, podmioty zapewniające wsparcie techniczne, bank, operatorzy pocztowi, dostawcy IT i innych usług, podmioty świadczące usługi telekomunikacyjne, zakłady ubezpieczeń, itp.</li>
                <li>podmioty, wobec których wyraziłeś zgodę na udostępnienie i przetwarzanie swoich danych osobowych.</li>
            </ul>

            <h3>Okres przechowywania danych osobowych:</h3>
            <p>Kancelaria przechowuje Twoje dane osobowe przez czas niezbędny do realizacji świadczenia pomocy prawnej oraz przez czas, w jakim możliwe jest dochodzenie roszczeń w związku z realizacją świadczenia pomocy prawnej. Dodatkowo, dane mogą być przechowywane przez Kancelarię dla celów przeciwdziałania praniu pieniędzy oraz finansowaniu terroryzmowi, dla celów statystycznych i archiwizacyjnych przez okres określony przepisami prawa liczony od dnia zakończenia obowiązywania umowy lub zdarzenia powodującego konieczność takiego przetwarzania.Jednocześnie, w celu rozliczalności będziemy przechowywać dane przez okres, w którym Kancelaria zobowiązana jest do zachowania danych na podstawie bezwzględnie obowiązujących przepisów (np.dla udokumentowania spełnienia wymagań prawnych, w tym umożliwienia kontroli ich spełnienia przez organy publiczne).</p>

            <h3>Przekazywanie danych osobowych do Państw Trzecich:</h3>
            <p>Twoje dane osobowe nie są przekazywane poza Europejski Obszar Gospodarczy. Przetwarzanie danych osobowych w sposób automatyczny Kancelaria nie przetwarza Twoich danych osobowych w sposób zautomatyzowany.</p>

            <h2>Wykorzystywanie plików cookie</h2>
            <ol>
                <li>Pliki cookies to małe pliki tekstowo-numeryczne umieszczane na komputerze Użytkownika podczas odwiedzin strony/witryny. Pliki cookie umożliwiają stronom internetowym rozpoznanie komputera użytkownika. Pliki te w większości przypadków nie umożliwiają identyfikacji tożsamości użytkownika sieci. Pliki cookie nie powodują żadnych szkód w komputerze Użytkownika i nie zawierają wirusów.</li>
                <li>Powszechnie stosowane są dwa rodzaje plików cookie – sesyjne oraz stałe. Cookies sesyjne, to pliki tymczasowe, które pozostają na urządzeniu użytkownika do momentu wylogowania ze strony internetowej lub wyłączenia przeglądarki. Cookies stałe pozostają w pamięci urządzenia użytkownika przez czas określony w ich parametrach lub do momentu ich ręcznego usunięcia.</li>
                <li>Administrator może wykorzystywać Cookies własne w szczególności: w celu poprawnej konfiguracji strony internetowej, realizacji procesów niezbędnych dla jej pełnej funkcjonalności, uwierzytelniania klienta w serwisie i zapewnienia ciągłości sesji klienta w serwisie, zapamiętania lokalizacji klienta, w celu analiz i badań oraz audytu oglądalności, a także w celu świadczenia usług reklamowych.</li>
                <li>Administrator może wykorzystywać cookies zewnętrzne, w szczególności: w zakresie stosowania narzędzi analitycznych, świadczenia usług reklamowych w tym w celu identyfikacji grup klientów, którzy podzielają określone zainteresowania, w celu umożliwienia udostępniania treści zawartych w witrynie na innych stronach internetowych.</li>
            <li>Administrator może wykorzystywać następujące cookies zewnętrzne:
                <ul>
                    <li>W celu polubienia strony Administratora lub bezpośredniego przejścia do profilu Katarzyna Gumula-Kubicka Kancelaria Adwokacka na Facebooku za pomocą serwisu Facebook Connect niezależnie od tego, czy masz konto na Facebooku i czy jesteś zalogowany(a) do Facebooka administrator cookies zewnętrznego: Facebook Inc z siedzibą w USA lub Facebook Ireland z siedzibą w Irlandii) – szczegóły i polityka Cookiem fb https://www.facebook.com/policies/cookies</li>
                    <li>W celu lokalizacji usługi Google Map i Google Earth za pomocą serwisu Google (administrator cookies zewnętrznego: Google Inc z siedzibą w USA) Więcej na ten temat: https://privacy.google.com/intl/pl/businesses/mapscontrollerterms/</li>
                </ul>
                </li>
            </ol>


            <table>
                <thead>
                    <tr>
                        <td >Źródło</td>
                        <td >Nazwa domeny cookie</td>
                        <td >Typ Cookie</td>
                        <td >Polityka Cookies</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >Facebook</td>
                        <td >Facebook.com</td>
                        <td >Profilowanie</td>
                        <td ><a href="http://web.archive.org/web/20210624061659/https://www.facebook.com/policies/cookies">https://www.facebook.com/policies/cookies</a></td>
                    </tr>
                    <tr>
                        <td >Google</td>
                        <td >Google.com</td>
                        <td >Lokalizacja</td>
                        <td ><a href="http://web.archive.org/web/20210624061659/https://privacy.google.com/intl/pl/businesses/mapscontrollerterms/">https://privacy.google.com/intl/pl/businesses/mapscontrollerterms/</a></td>
                    </tr>
                </tbody>
            </table>

            <p>Administrator danych nie ponosi odpowiedzialności za jakiekolwiek wadliwe działanie witryn stron trzecich wymienionych na tej stronie.</p>
            <ol start={6}>
                <li>Jeżeli Użytkownicy nie życzą sobie wykorzystania plików cookies, mogą w każdej chwili zarządzać użyciem plików w tym zrezygnować z tej formy gromadzenia danych w następujący sposób:
                    <ul>
                        <li>Poprzez modyfikację ustawień przeglądarki internetowej, gdzie w ustawieniach zabezpieczeń można niezależnie od siebie dopuszczać lub blokować tymczasowe i trwale zapisane pliki cookie. Szczegółowe informacje o możliwości i sposobach obsługi plików cookie dostępne są w zakładce Pomoc w menu każdej przeglądarki.</li>
                        <li>Poprzez odwiedzenie wskazanych w ust. 5 witryn w celu rezygnacji z wykorzystania zewnętrznych plików cookies w tym plików cookie do wyświetlania reklam opartych na zainteresowaniach (jeśli dostawca takiej witryny lub sieć reklamowa dają taką możliwość).</li>
                        <li>Za pośrednictwem specjalnie przeznaczonych do tego narzędzi do obsługi wyborów konsumenckich, które służą do zarządzania plikami cookie używanymi do wyświetlania reklam, opartych na zainteresowaniach Użytkowników dostępnych np. tutaj&nbsp;<a href="http://web.archive.org/web/20210624061659/https://www.youronlinechoices.eu/">https://www.youronlinechoices.eu/</a>lub tutaj&nbsp;<a href="http://web.archive.org/web/20210624061659/https://www.aboutads.info/choices/">https://www.aboutads.info/choices/</a>&nbsp;.</li>
                    </ul>
                </li>
                <li>Jeżeli pliki cookie zostaną dezaktywowane, z wykorzystaniem metod określonych w niniejszym paragrafie istnieje zagrożenie, że niektóre funkcjonalności na naszej stronie internetowej będą niedostępne, a niektóre strony internetowe będą wyświetlane nieprawidłowo.</li>
                <li>Strona internetowa może ale nie musi zawierać odnośniki do innych stron internetowych. Administrator zaleca by po przejściu na inne strony, zapoznać się z polityką prywatności tam ustaloną. Niniejsza polityka prywatności dotyczy tylko serwisu i strony Administratora.</li>
                <li>Administrator stosuje środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych odpowiednią do zagrożeń oraz kategorii danych objętych ochroną, a w szczególności zabezpiecza dane przed ich udostępnieniem osobom nieupoważnionym, zabraniem przez osobę nieuprawnioną, przetwarzaniem z naruszeniem obowiązujących przepisów oraz zmianą, utratą, uszkodzeniem lub zniszczeniem zgodnie z obowiązującymi przepisami prawa.</li>
            </ol>
        </div>
    </div>
  </Layout>
)

export default PolitykaPrywatnosci
