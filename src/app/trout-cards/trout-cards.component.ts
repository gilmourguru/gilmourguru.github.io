import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';



@Component({
  selector: 'trout-cards',
  templateUrl: './trout-cards.component.html',
  styleUrls: ['./trout-cards.component.css']
})
export class TroutCardsComponent {
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Brown', cols: 1, rows: 1, 
          photo: "../assets/images/brown_trout_1.jpg", 
          content: "The brown trout is a medium-sized fish, growing to 20 kg (44 lb) or more and a length of about 100 cm (39 in) in some localities, although in many smaller rivers, a mature weight of 1.0 kg (2.2 lb) or less is common. S. t. lacustris reaches an average length of 40–80 cm (16–31 in) with a maximum length of 140 cm (55 in) and about 60 pounds (27 kg). The spawning behaviour of brown trout is similar to that of the closely related Atlantic salmon. A typical female produces about 2,000 eggs per kg (900 eggs per lb) of body weight at spawning. On September 11, 2009, a 41.45-lb (18.80-kg) brown trout was caught by Tom Healy in the Manistee River system in Michigan, setting a new state record. As of late December 2009, the fish captured by Healy was confirmed by both the International Game Fish Association and the Fresh Water Fishing Hall of Fame as the new all-tackle world record for the species. This fish now supplants the former world record from the Little Red River in Arkansas. Brown trout can live 20 years, but as with the Atlantic salmon, a high proportion of males die after spawning, and probably fewer than 20% of anadromous female kelts recover from spawning."},
          { title: 'Brook', cols: 1, rows: 1, 
          photo: "../assets/images/brook_trout_1.jpg", 
          content: "The brook trout has a dark green to brown color, with a distinctive marbled pattern (called vermiculation) of lighter shades across the flanks and back and extending at least to the dorsal fin, and often to the tail. A distinctive sprinkling of red dots, surrounded by blue halos, occurs along the flanks. The belly and lower fins are reddish in color, the latter with white leading edges. Often, the belly, particularly of the males, becomes very red or orange when the fish are spawning. Typical lengths of the brook trout vary from 25 to 65 cm (9.8 to 25.6 in), and weights from 0.3 to 3 kg (0.66 to 6.61 lb). The maximum recorded length is 86 cm (34 in) and maximum weight 6.6 kg (15 lb). Brook trout can reach at least seven years of age, with reports of 15-year-old specimens observed in California habitats to which the species has been introduced. Growth rates are dependent on season, age, water and ambient air temperatures, and flow rates. In general, flow rates affect the rate of change in the relationship between temperature and growth rate. For example, in spring, growth increased with temperature at a faster rate with high flow rates than with low flow rates."},
          { title: 'Rainbow', cols: 1, rows: 1, 
          photo: "../assets/images/rainbow_trout_1.jpg", 
          content: "Resident freshwater rainbow trout adults average between 1 and 5 lb (0.5 and 2.3 kg) in riverine environments, while lake-dwelling and anadromous forms may reach 20 lb (9 kg). Coloration varies widely between regions and subspecies. Adult freshwater forms are generally blue-green or olive green with heavy black spotting over the length of the body. Adult fish have a broad reddish stripe along the lateral line, from gills to the tail, which is most pronounced in breeding males.[9] The caudal fin is squarish and only mildly forked. Lake-dwelling and anadromous forms are usually more silvery in color with the reddish stripe almost completely gone. Juvenile rainbow trout display parr marks (dark vertical bars) typical of most salmonid juveniles. In some redband and golden trout forms parr marks are typically retained into adulthood. Some coastal rainbow trout (O. m. irideus) and Columbia River redband trout (O. m. gairdneri) populations and cutbow hybrids may also display reddish or pink throat markings similar to cutthroat trout. In many regions, hatchery-bred trout can be distinguished from native trout via fin clips."},
          { title: 'Cutthroat', cols: 1, rows: 1, 
          photo: "../assets/images/cutthroat_trout_1.jpg", 
          content: "Throughout their native and introduced ranges, cutthroat trout vary widely in size, coloration and habitat selection. Their coloration can range from golden to gray to green on the back. Cutthroat trout can generally be distinguished from rainbow trout by the presence of basibranchial teeth at the base of tongue and a maxillary that extends beyond the posterior edge of the eye. Depending on subspecies, strain and habitat, most have distinctive red, pink, or orange linear marks along the underside of their mandibles in the lower folds of the gill plates. These markings are responsible for the common name \"cutthroat\", first given to the trout by outdoor writer Charles Hallock in an 1884 article in The American Angler. These markings are not unique to the species, some coastal rainbow trout (Oncorhynchus mykiss irideus) and Columbia River redband trout (O. m. gairdneri) populations also display reddish or pink throat markings. At maturity, different populations and subspecies of cutthroat trout can range from 6 to 40 inches (15 to 102 cm) in length, depending on habitat and food availability."}
        ];
      }

      return [
        { title: 'Brown', cols: 1, rows: 1, 
          photo: "../assets/images/brown_trout_1.jpg", 
          content: "The brown trout is a medium-sized fish, growing to 20 kg (44 lb) or more and a length of about 100 cm (39 in) in some localities, although in many smaller rivers, a mature weight of 1.0 kg (2.2 lb) or less is common. S. t. lacustris reaches an average length of 40–80 cm (16–31 in) with a maximum length of 140 cm (55 in) and about 60 pounds (27 kg). The spawning behaviour of brown trout is similar to that of the closely related Atlantic salmon. A typical female produces about 2,000 eggs per kg (900 eggs per lb) of body weight at spawning. On September 11, 2009, a 41.45-lb (18.80-kg) brown trout was caught by Tom Healy in the Manistee River system in Michigan, setting a new state record. As of late December 2009, the fish captured by Healy was confirmed by both the International Game Fish Association and the Fresh Water Fishing Hall of Fame as the new all-tackle world record for the species. This fish now supplants the former world record from the Little Red River in Arkansas. Brown trout can live 20 years, but as with the Atlantic salmon, a high proportion of males die after spawning, and probably fewer than 20% of anadromous female kelts recover from spawning."},
          { title: 'Brook', cols: 1, rows: 1, 
          photo: "../assets/images/brook_trout_1.jpg", 
          content: "The brook trout has a dark green to brown color, with a distinctive marbled pattern (called vermiculation) of lighter shades across the flanks and back and extending at least to the dorsal fin, and often to the tail. A distinctive sprinkling of red dots, surrounded by blue halos, occurs along the flanks. The belly and lower fins are reddish in color, the latter with white leading edges. Often, the belly, particularly of the males, becomes very red or orange when the fish are spawning. Typical lengths of the brook trout vary from 25 to 65 cm (9.8 to 25.6 in), and weights from 0.3 to 3 kg (0.66 to 6.61 lb). The maximum recorded length is 86 cm (34 in) and maximum weight 6.6 kg (15 lb). Brook trout can reach at least seven years of age, with reports of 15-year-old specimens observed in California habitats to which the species has been introduced. Growth rates are dependent on season, age, water and ambient air temperatures, and flow rates. In general, flow rates affect the rate of change in the relationship between temperature and growth rate. For example, in spring, growth increased with temperature at a faster rate with high flow rates than with low flow rates."},
          { title: 'Rainbow', cols: 1, rows: 1, 
          photo: "../assets/images/rainbow_trout_1.jpg", 
          content: "Resident freshwater rainbow trout adults average between 1 and 5 lb (0.5 and 2.3 kg) in riverine environments, while lake-dwelling and anadromous forms may reach 20 lb (9 kg). Coloration varies widely between regions and subspecies. Adult freshwater forms are generally blue-green or olive green with heavy black spotting over the length of the body. Adult fish have a broad reddish stripe along the lateral line, from gills to the tail, which is most pronounced in breeding males.[9] The caudal fin is squarish and only mildly forked. Lake-dwelling and anadromous forms are usually more silvery in color with the reddish stripe almost completely gone. Juvenile rainbow trout display parr marks (dark vertical bars) typical of most salmonid juveniles. In some redband and golden trout forms parr marks are typically retained into adulthood. Some coastal rainbow trout (O. m. irideus) and Columbia River redband trout (O. m. gairdneri) populations and cutbow hybrids may also display reddish or pink throat markings similar to cutthroat trout. In many regions, hatchery-bred trout can be distinguished from native trout via fin clips."},
          { title: 'Cutthroat', cols: 1, rows: 1, 
          photo: "../assets/images/cutthroat_trout_1.jpg", 
          content: "Throughout their native and introduced ranges, cutthroat trout vary widely in size, coloration and habitat selection. Their coloration can range from golden to gray to green on the back. Cutthroat trout can generally be distinguished from rainbow trout by the presence of basibranchial teeth at the base of tongue and a maxillary that extends beyond the posterior edge of the eye. Depending on subspecies, strain and habitat, most have distinctive red, pink, or orange linear marks along the underside of their mandibles in the lower folds of the gill plates. These markings are responsible for the common name \"cutthroat\", first given to the trout by outdoor writer Charles Hallock in an 1884 article in The American Angler. These markings are not unique to the species, some coastal rainbow trout (Oncorhynchus mykiss irideus) and Columbia River redband trout (O. m. gairdneri) populations also display reddish or pink throat markings. At maturity, different populations and subspecies of cutthroat trout can range from 6 to 40 inches (15 to 102 cm) in length, depending on habitat and food availability."}
      ];
    })
  );

  pg_title = 'Trout in Taylor Park'

  constructor(private breakpointObserver: BreakpointObserver) {}
}
