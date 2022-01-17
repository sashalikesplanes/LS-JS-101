const multisum = target => {
  const multiplesUpToTarget = []
  // Add all multiples of 3
  // Add all multiples of 5 but not 3
  for (let i = 3; i <= target; i += 3) multiplesUpToTarget.push(i);
  for (let i = 5; i <= target; i += 5) if (i % 3) multiplesUpToTarget.push(i);
  return multiplesUpToTarget.reduce((total, multiple) => total + multiple, 0); 
}