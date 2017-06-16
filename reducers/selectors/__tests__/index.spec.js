import { selectAuthState } from '../';

describe('selectors', () => {
  test('should select auth state', () => {
    const mockState = { auth: { id: 1 } };
    expect({ id: 1 }).toEqual(selectAuthState(mockState));
  });
});
