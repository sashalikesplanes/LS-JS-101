const dms = angleDegresWithDecimal => {
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_DEGREE = 60 * 60;

  let angleDegrees = Math.floor(angleDegresWithDecimal);
  const angleMinutes = Math.floor((angleDegresWithDecimal - angleDegrees)
                                        * MINUTES_PER_DEGREE);
  const angleSeconds = Math.floor((angleDegresWithDecimal - angleDegrees
                                  - (angleMinutes / MINUTES_PER_DEGREE))
                                  * SECONDS_PER_DEGREE);

  while (angleDegrees < 0 || angleDegrees > 360) {
    if (angleDegrees < 0) angleDegrees += 360;
    else if (angleDegrees > 360) angleDegrees -= 360;
  }

  console.log(`${angleDegrees}°${String(angleMinutes).padStart(2, '0')}'`
              + `${String(angleSeconds).padStart(2, '0')}"`);
};

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"