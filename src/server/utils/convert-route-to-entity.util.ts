const mapping: Record<string, string> = {
  organizations: 'organization',
  outlets: 'outlet',
  'rental-orders': 'rental_order',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
